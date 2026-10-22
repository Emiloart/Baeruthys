import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
import ProductImage from '../../components/ProductImage'
import { useCart } from '../../context/CartContext'
import { PRODUCTS, getCategoryName, getProductBySlug, getRelatedProducts } from '../../data/products'
import { DELIVERY_METHODS, FREE_SHIPPING_THRESHOLD } from '../../lib/site'
import { formatNaira } from '../../lib/format'

export function getStaticPaths() {
  return {
    paths: PRODUCTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug)
  if (!product) return { notFound: true }
  const related = getRelatedProducts(product, 4)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      related: JSON.parse(JSON.stringify(related)),
    },
  }
}

export default function ProductPage({ product, related }) {
  const { addItem, toggleWishlist, isWishlisted, ready } = useCart()
  const hasSizes = Boolean(product.sizes && product.sizes.length)
  const hasColors = Boolean(product.colors && product.colors.length)

  const [size, setSize] = useState(null)
  const [color, setColor] = useState(hasColors ? product.colors[0] : null)
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  const wished = ready && isWishlisted(product.id)
  const standard = DELIVERY_METHODS.find((m) => m.id === 'standard')

  function handleAdd() {
    if (hasSizes && !size) {
      setError('Please select a size.')
      setAdded(false)
      return
    }
    setError('')
    addItem(product, { size, color, qty })
    setAdded(true)
  }

  function changeQty(next) {
    setQty(Math.max(1, Math.min(20, next)))
    setAdded(false)
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className="border-b border-baer-bdr bg-baer-bg">
        <div className="shell py-3.5 text-[13px] text-baer-mid">
          <Link href="/" className="hover:text-baer-dark">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-baer-dark">
            {getCategoryName(product.category)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-baer-dark">{product.name}</span>
        </div>
      </div>

      <section className="shell grid gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
        <div className="overflow-hidden rounded border border-baer-bdr bg-baer-surf">
          <div className="aspect-[4/5]">
            <ProductImage product={product} textSize="text-[8rem]" />
          </div>
        </div>

        <div>
          <div className="eyebrow">Baeruthys Collection</div>
          <h1 className="mt-3 text-4xl font-bold text-baer-dark">{product.name}</h1>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif text-3xl font-bold text-baer-dark">{formatNaira(product.price)}</span>
            {product.compareAt ? (
              <span className="text-base text-baer-mid line-through">{formatNaira(product.compareAt)}</span>
            ) : null}
          </div>

          <p className="mt-2 text-sm text-baer-mid">
            Standard delivery in {standard ? standard.detail : '3 to 5 business days'}.
          </p>

          <div className="my-6 border-t border-baer-bdr" />

          {hasSizes && (
            <div className="mb-6">
              <div className="field-label">Size</div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={size === s}
                    onClick={() => {
                      setSize(s)
                      setError('')
                      setAdded(false)
                    }}
                    className={`h-11 min-w-[2.75rem] rounded-sm border px-3 text-sm ${
                      size === s
                        ? 'border-baer-dark bg-baer-dark text-white'
                        : 'border-baer-bdr bg-white text-baer-dark hover:border-baer-dark'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {hasColors && (
            <div className="mb-6">
              <div className="field-label">Colour: {color ? color.name : ''}</div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    aria-label={c.name}
                    aria-pressed={color && color.name === c.name}
                    onClick={() => {
                      setColor(c)
                      setAdded(false)
                    }}
                    className={`h-8 w-8 rounded-full border ${
                      color && color.name === c.name
                        ? 'border-baer-dark ring-2 ring-baer-dark ring-offset-2'
                        : 'border-baer-bdr'
                    }`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="field-label">Quantity</div>
            <div className="inline-flex items-center rounded-sm border border-baer-bdr bg-white">
              <button
                type="button"
                onClick={() => changeQty(qty - 1)}
                aria-label="Decrease quantity"
                className="h-11 w-11 text-lg text-baer-dark hover:bg-baer-surf"
              >
                &minus;
              </button>
              <span className="w-10 text-center text-sm font-medium" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => changeQty(qty + 1)}
                aria-label="Increase quantity"
                className="h-11 w-11 text-lg text-baer-dark hover:bg-baer-surf"
              >
                +
              </button>
            </div>
          </div>

          {error ? (
            <p role="alert" className="mb-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={handleAdd} className="btn-dark flex-1 !py-4">
              Add to Cart
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={wished}
              className="btn-outline !py-4 sm:w-44"
            >
              {wished ? '\u2665 Saved' : '\u2661 Wishlist'}
            </button>
          </div>

          {added ? (
            <p role="status" className="mt-4 text-sm text-baer-dark">
              Added to your cart.{' '}
              <Link href="/cart" className="font-medium text-baer-gold underline">
                View cart
              </Link>
            </p>
          ) : null}

          <div className="my-8 border-t border-baer-bdr" />

          <div className="field-label">Description</div>
          <p className="text-sm leading-7 text-baer-mid">{product.description}</p>

          <p className="mt-6 text-[13px] text-baer-mid">
            Free standard delivery on orders over {formatNaira(FREE_SHIPPING_THRESHOLD)}. See our{' '}
            <Link href="/policies/shipping" className="underline hover:text-baer-dark">
              shipping
            </Link>{' '}
            and{' '}
            <Link href="/policies/returns" className="underline hover:text-baer-dark">
              returns
            </Link>{' '}
            information.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-baer-bdr bg-baer-surf py-14">
          <div className="shell">
            <h2 className="mb-8 text-3xl font-bold text-baer-dark">You May Also Like</h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
