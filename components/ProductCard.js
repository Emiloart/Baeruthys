import Link from 'next/link'
import { useRouter } from 'next/router'
import ProductImage from './ProductImage'
import { useCart } from '../context/CartContext'
import { formatNaira } from '../lib/format'

const BADGE_STYLES = {
  New: 'bg-baer-gold text-baer-dark',
  Trending: 'bg-baer-dark text-white',
  Popular: 'bg-white text-baer-dark border border-baer-bdr',
  Sale: 'bg-red-700 text-white',
}

export default function ProductCard({ product }) {
  const router = useRouter()
  const { addItem, toggleWishlist, isWishlisted, ready } = useCart()

  const needsChoice = Boolean((product.sizes && product.sizes.length) || (product.colors && product.colors.length > 1))
  const wished = ready && isWishlisted(product.id)
  const href = `/product/${product.slug}`

  function handleAdd() {
    if (needsChoice) {
      router.push(href)
      return
    }
    addItem(product, { color: product.colors && product.colors[0] ? product.colors[0] : null })
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-baer-bdr bg-white transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-[4/4.5] overflow-hidden bg-baer-surf">
        <Link href={href} aria-label={product.name} className="block h-full w-full">
          <ProductImage product={product} className="transition-transform duration-500 group-hover:scale-[1.04]" />
        </Link>

        {product.tag ? (
          <span className={`absolute left-2 top-2 rounded-sm px-2 py-1 text-[9px] font-semibold uppercase tracking-wider sm:left-3 sm:top-3 ${BADGE_STYLES[product.tag] || BADGE_STYLES.Popular}`}>
            {product.tag}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from saved items` : `Save ${product.name}`}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-lg text-baer-dark shadow-sm transition-colors hover:text-baer-gold sm:right-3 sm:top-3"
        >
          {wished ? '\u2665' : '\u2661'}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.12em] text-baer-mid">{product.unit || 'Each'}</p>
        <h3 className="font-sans text-[13px] font-medium leading-5 text-baer-dark sm:text-sm">
          <Link href={href} className="hover:text-baer-gold">{product.name}</Link>
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="font-sans text-sm font-bold text-baer-dark sm:text-base">{formatNaira(product.price)}</span>
          {product.compareAt ? <span className="text-xs text-baer-mid line-through">{formatNaira(product.compareAt)}</span> : null}
        </div>

        <button type="button" onClick={handleAdd} className="btn-dark mt-4 w-full !px-2 !py-2.5 text-xs sm:text-[13px]">
          {needsChoice ? 'Choose options' : 'Add to basket'}
        </button>
      </div>
    </article>
  )
}
