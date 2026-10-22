import Link from 'next/link'
import Layout from '../components/Layout'
import ProductImage from '../components/ProductImage'
import { getProductBySlug } from '../data/products'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_THRESHOLD } from '../lib/site'
import { formatNaira } from '../lib/format'

function QtyControl({ value, onChange, label }) {
  return (
    <div className="inline-flex items-center rounded-sm border border-baer-bdr bg-white">
      <button
        type="button"
        aria-label={`Decrease quantity of ${label}`}
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        className="h-9 w-9 text-base text-baer-dark hover:bg-baer-surf disabled:opacity-40"
      >
        &minus;
      </button>
      <span className="w-8 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label={`Increase quantity of ${label}`}
        onClick={() => onChange(value + 1)}
        className="h-9 w-9 text-base text-baer-dark hover:bg-baer-surf"
      >
        +
      </button>
    </div>
  )
}

export default function CartPage() {
  const { items, itemCount, subtotal, updateQty, removeItem, ready } = useCart()
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))

  return (
    <Layout title="Your Basket">
      <div className="border-b border-baer-bdr bg-baer-bg">
        <div className="shell flex items-baseline gap-4 py-8">
          <h1 className="text-4xl font-bold text-baer-dark">Your Cart</h1>
          {ready && itemCount > 0 ? (
            <span className="text-sm text-baer-mid">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          ) : null}
        </div>
      </div>

      {!ready ? (
        <div className="shell py-20 text-center text-sm text-baer-mid">Loading your cart...</div>
      ) : items.length === 0 ? (
        <div className="shell py-24 text-center">
          <p className="font-serif text-3xl text-baer-dark">Your basket is empty</p>
          <p className="mt-3 text-sm text-baer-mid">Find something you love and it will appear here.</p>
          <Link href="/shop" className="btn-dark mt-8">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="shell grid gap-10 py-10 lg:grid-cols-[1fr_360px]">
          <section aria-label="Cart items">
            <div className="hidden grid-cols-[1fr_110px_120px_110px] gap-4 border-b border-baer-bdr bg-baer-surf px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-baer-mid md:grid">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span className="text-right">Total</span>
            </div>

            <ul>
              {items.map((line) => {
                const product = getProductBySlug(line.slug)
                const details = [line.unit || 'Each', line.size ? `Size: ${line.size}` : null, line.color ? `Colour: ${line.color.name}` : null]
                  .filter(Boolean)
                  .join('  |  ')

                return (
                  <li
                    key={line.key}
                    className="grid grid-cols-[80px_1fr] gap-4 border-b border-baer-bdr px-1 py-5 md:grid-cols-[1fr_110px_120px_110px] md:items-center md:px-4"
                  >
                    <div className="flex gap-4 md:col-span-1">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-baer-surf">
                        {product ? <ProductImage product={product} textSize="text-3xl" /> : null}
                      </div>
                      <div className="hidden md:block">
                        <Link href={`/product/${line.slug}`} className="text-sm font-medium text-baer-dark hover:text-baer-gold">
                          {line.name}
                        </Link>
                        {details ? <p className="mt-1 text-[13px] text-baer-mid">{details}</p> : null}
                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          className="mt-2 text-xs text-red-700 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Mobile layout details */}
                    <div className="md:hidden">
                      <Link href={`/product/${line.slug}`} className="text-sm font-medium text-baer-dark">
                        {line.name}
                      </Link>
                      {details ? <p className="mt-1 text-[13px] text-baer-mid">{details}</p> : null}
                      <p className="mt-1 text-sm text-baer-dark">{formatNaira(line.price)}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <QtyControl value={line.qty} label={line.name} onChange={(n) => updateQty(line.key, n)} />
                        <span className="font-serif text-base font-bold">{formatNaira(line.price * line.qty)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="mt-3 text-xs text-red-700 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    <span className="hidden text-sm text-baer-dark md:block">{formatNaira(line.price)}</span>
                    <div className="hidden md:block">
                      <QtyControl value={line.qty} label={line.name} onChange={(n) => updateQty(line.key, n)} />
                    </div>
                    <span className="hidden text-right font-serif text-base font-bold md:block">
                      {formatNaira(line.price * line.qty)}
                    </span>
                  </li>
                )
              })}
            </ul>

            <Link href="/shop" className="mt-6 inline-block text-sm font-medium text-baer-dark hover:text-baer-gold">
              &larr; Continue Shopping
            </Link>
          </section>

          <aside className="h-fit rounded border border-baer-bdr bg-baer-surf p-6" aria-label="Order summary">
            <h2 className="text-2xl font-bold text-baer-dark">Order Summary</h2>

            <div className="mt-5 border-t border-baer-bdr pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-baer-mid">Subtotal</span>
                <span className="font-medium">{formatNaira(subtotal)}</span>
              </div>
              <p className="mt-2 text-[13px] text-baer-mid">Delivery and promo codes are applied at checkout.</p>
            </div>

            <div className="mt-5 rounded-sm bg-white p-4 text-[13px]">
              {remaining > 0 ? (
                <p className="text-baer-dark">
                  Add <strong>{formatNaira(remaining)}</strong> more for free standard delivery.
                </p>
              ) : (
                <p className="font-medium text-baer-dark">You have unlocked free standard delivery.</p>
              )}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-baer-bdr">
                <div className="h-full bg-baer-gold transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <Link href="/checkout" className="btn-dark mt-6 w-full !py-4">
              Proceed to Checkout &rarr;
            </Link>
          </aside>
        </div>
      )}
    </Layout>
  )
}
