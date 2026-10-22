import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { PAYMENTS_LIVE, WHATSAPP_NUMBER } from '../lib/site'
import { formatNaira } from '../lib/format'

// Must match the key written by pages/checkout.js
const LAST_ORDER_KEY = 'baeruthys_last_order_v1'

function buildWhatsAppLink(order) {
  if (!WHATSAPP_NUMBER) return null
  const lines = order.items.map((item) => {
    const options = [item.size, item.color].filter(Boolean).join(', ')
    return `- ${item.name}${options ? ` (${options})` : ''} x ${item.qty}: ${formatNaira(item.price * item.qty)}`
  })
  const c = order.customer
  const message = [
    `New order ${order.id}`,
    '',
    ...lines,
    '',
    `Subtotal: ${formatNaira(order.totals.subtotal)}`,
    order.totals.discount > 0 ? `Discount: -${formatNaira(order.totals.discount)}` : null,
    `Delivery (${order.delivery.name}): ${order.totals.delivery === 0 ? 'Free' : formatNaira(order.totals.delivery)}`,
    `Total: ${formatNaira(order.totals.total)}`,
    `Payment preference: ${order.payment.name}`,
    '',
    `Name: ${c.fullName}`,
    `Phone: ${c.phone}`,
    `Email: ${c.email}`,
    `Address: ${c.address}, ${c.city}, ${c.state}, ${c.country}`,
  ]
    .filter((line) => line !== null)
    .join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function OrderConfirmed() {
  const [order, setOrder] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(LAST_ORDER_KEY)
      if (raw) setOrder(JSON.parse(raw))
    } catch (e) {
      setOrder(null)
    }
    setLoaded(true)
  }, [])

  const whatsappLink = order ? buildWhatsAppLink(order) : null

  return (
    <Layout title="Order Placed">
      <div className="shell py-14 sm:py-20">
        {!loaded ? (
          <p className="text-center text-sm text-baer-mid">Loading...</p>
        ) : !order ? (
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-3xl font-bold text-baer-dark">No recent order found</h1>
            <p className="mt-3 text-sm text-baer-mid">When you place an order, its summary appears here.</p>
            <Link href="/shop" className="btn-dark mt-8">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded border border-baer-bdr bg-white p-8 sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-baer-gold text-2xl text-white">
              &#10003;
            </div>
            <h1 className="mt-6 text-center text-3xl font-bold text-baer-dark sm:text-4xl">Thank you for your order</h1>
            <p className="mt-3 text-center text-sm text-baer-mid">
              Thank you for shopping with Baeruthys, {order.customer.fullName.split(' ')[0]}.
            </p>
            <p className="mt-2 text-center text-sm font-semibold text-baer-gold">Order {order.id}</p>

            {!PAYMENTS_LIVE && !whatsappLink && (
              <div role="note" className="mt-6 rounded-sm border border-baer-gold bg-baer-cream px-4 py-3 text-[13px] text-baer-dark">
                <strong>Preview order.</strong> This order has not been sent to the store and no payment was taken.
              </div>
            )}

            {whatsappLink && (
              <div className="mt-6 rounded-sm border border-baer-gold bg-baer-cream px-4 py-4 text-center">
                <p className="text-[13px] text-baer-dark">
                  Send your order details to us on WhatsApp so we can confirm payment and arrange delivery.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-dark mt-3">
                  Send Order on WhatsApp
                </a>
              </div>
            )}

            <div className="mt-8 border-t border-baer-bdr pt-6">
              <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-baer-mid">Items</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {order.items.map((item, index) => {
                  const options = [item.size, item.color].filter(Boolean).join(', ')
                  return (
                    <li key={index} className="flex justify-between gap-4">
                      <span className="text-baer-dark">
                        {item.name}
                        {options ? <span className="text-baer-mid">{` (${options})`}</span> : null} &times; {item.qty}
                      </span>
                      <span className="font-medium">{formatNaira(item.price * item.qty)}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-5 space-y-2 border-t border-baer-bdr pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-baer-mid">Subtotal</span>
                  <span>{formatNaira(order.totals.subtotal)}</span>
                </div>
                {order.totals.discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-baer-mid">Discount</span>
                    <span>-{formatNaira(order.totals.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-baer-mid">Delivery ({order.delivery.name})</span>
                  <span>{order.totals.delivery === 0 ? 'Free' : formatNaira(order.totals.delivery)}</span>
                </div>
                <div className="flex items-baseline justify-between pt-2">
                  <span className="font-semibold text-baer-dark">Total</span>
                  <span className="font-serif text-xl font-bold text-baer-dark">{formatNaira(order.totals.total)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 border-t border-baer-bdr pt-6 text-sm sm:grid-cols-2">
              <div>
                <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-baer-mid">Delivering to</h2>
                <p className="mt-2 leading-6 text-baer-dark">
                  {order.customer.fullName}
                  <br />
                  {order.customer.address}
                  <br />
                  {order.customer.city}, {order.customer.state}
                  <br />
                  {order.customer.country}
                </p>
              </div>
              <div>
                <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-baer-mid">Delivery and payment</h2>
                <p className="mt-2 leading-6 text-baer-dark">
                  {order.delivery.name}
                  <br />
                  <span className="text-baer-mid">{order.delivery.detail}</span>
                  <br />
                  Payment: {order.payment.name}
                </p>
              </div>
            </div>

            <Link href="/shop" className="btn-dark mt-8 w-full !py-4">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}
