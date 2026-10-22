import Link from 'next/link'
import { useRouter } from 'next/router'
import ProductImage from './ProductImage'
import { useCart } from '../context/CartContext'
import { formatNaira } from '../lib/format'

const BADGE_STYLES = {
  New: 'bg-baer-gold text-baer-dark',
  Trending: 'bg-baer-dark text-white',
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
    <article className="group flex h-full flex-col overflow-hidden rounded border border-baer-bdr bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-baer-surf">
        <Link href={href} aria-label={product.name} className="block h-full w-full">
          <ProductImage product={product} className="transition-transform duration-500 group-hover:scale-[1.03]" />
        </Link>

        {product.tag ? (
          <span
            className={`absolute left-3 top-3 rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              BADGE_STYLES[product.tag] || BADGE_STYLES.Trending
            }`}
          >
            {product.tag}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-base text-baer-dark shadow-sm transition-colors hover:text-baer-gold"
        >
          {wished ? '\u2665' : '\u2661'}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-sans text-sm font-medium text-baer-dark">
          <Link href={href} className="hover:text-baer-gold">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-serif text-base font-bold text-baer-dark">{formatNaira(product.price)}</span>
          {product.compareAt ? (
            <span className="text-xs text-baer-mid line-through">{formatNaira(product.compareAt)}</span>
          ) : null}
        </div>

        <button type="button" onClick={handleAdd} className="btn-dark mt-4 w-full !py-2.5 text-[13px]">
          {needsChoice ? 'Choose Options' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}
