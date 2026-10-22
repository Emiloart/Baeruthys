import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'
import {
  DELIVERY_METHODS,
  PAYMENTS_LIVE,
  PAYMENT_METHODS,
  deliveryFee,
  isValidPromo,
  promoDiscount,
} from '../lib/site'
import { formatNaira } from '../lib/format'

export const LAST_ORDER_KEY = 'baeruthys_last_order_v1'

const EMPTY_FORM = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  country: 'Nigeria',
}

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = 'Enter your full name.'
  const phoneDigits = form.phone.replace(/\D/g, '')
  if (phoneDigits.length < 10) errors.phone = 'Enter a valid phone number.'
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.'
  if (!form.address.trim()) errors.address = 'Enter your street address.'
  if (!form.city.trim()) errors.city = 'Enter your city.'
  if (!form.state.trim()) errors.state = 'Enter your state.'
  if (!form.country.trim()) errors.country = 'Enter your country.'
  return errors
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder, autoComplete, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="field-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`field ${error ? '!border-red-600' : ''}`}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default function Checkout() {
  const router = useRouter()
  const { items, subtotal, clearCart, ready } = useCart()

  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [deliveryId, setDeliveryId] = useState(DELIVERY_METHODS[0].id)
  const [paymentId, setPaymentId] = useState(PAYMENT_METHODS[0].id)
  const [promoInput, setPromoInput] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [promoMessage, setPromoMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const discount = useMemo(() => promoDiscount(promoCode, subtotal), [promoCode, subtotal])
  const delivery = useMemo(() => deliveryFee(deliveryId, subtotal), [deliveryId, subtotal])
  const total = Math.max(0, subtotal - discount + delivery)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function applyPromo() {
    const code = promoInput.trim()
    if (!code) {
      setPromoMessage('')
      return
    }
    if (isValidPromo(code)) {
      setPromoCode(code.toUpperCase())
      setPromoMessage('Promo code applied.')
    } else {
      setPromoCode('')
      setPromoMessage('That promo code is not valid.')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (submitting || items.length === 0) return

    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      const el = document.getElementById(first)
      if (el) el.focus()
      return
    }

    setSubmitting(true)

    const deliveryMethod = DELIVERY_METHODS.find((m) => m.id === deliveryId)
    const paymentMethod = PAYMENT_METHODS.find((m) => m.id === paymentId)

    const order = {
      id: `BAE-${Date.now().toString(36).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      customer: { ...form },
      items: items.map((line) => ({
        name: line.name,
        size: line.size,
        color: line.color ? line.color.name : null,
        qty: line.qty,
        price: line.price,
      })),
      delivery: { id: deliveryId, name: deliveryMethod.name, detail: deliveryMethod.detail, fee: delivery },
      payment: { id: paymentId, name: paymentMethod.name, live: PAYMENTS_LIVE },
      totals: { subtotal, discount, delivery, total },
      promoCode: promoCode || null,
    }

    try {
      window.localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order))
    } catch (e) {
      // Continue even if storage is unavailable; the confirmation page handles a missing order.
    }

    clearCart()
    router.push('/order-confirmed')
  }

  return (
    <Layout title="Checkout">
      <div className="border-b border-baer-bdr bg-baer-bg">
        <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-baer-dark">Checkout</h1>
          <ol className="flex items-center gap-4 text-xs text-baer-mid" aria-label="Checkout steps">
            <li>1. Cart</li>
            <li className="border-b-2 border-baer-dark pb-1 font-medium text-baer-dark">2. Delivery and Payment</li>
            <li>3. Confirmation</li>
          </ol>
        </div>
      </div>

      {!ready ? (
        <div className="shell py-20 text-center text-sm text-baer-mid">Loading...</div>
      ) : items.length === 0 ? (
        <div className="shell py-24 text-center">
          <p className="font-serif text-3xl text-baer-dark">Your cart is empty</p>
          <p className="mt-3 text-sm text-baer-mid">Add something to your cart before checking out.</p>
          <Link href="/shop" className="btn-dark mt-8">
            Start Shopping
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="shell grid gap-10 py-10 lg:grid-cols-[1fr_380px]">
          <div>
            {!PAYMENTS_LIVE && (
              <div role="note" className="mb-8 rounded-sm border border-baer-gold bg-baer-cream px-4 py-3 text-[13px] text-baer-dark">
                <strong>Preview checkout.</strong> Online payment is not connected yet, so no payment is taken when you
                place this order.
              </div>
            )}

            <h2 className="text-2xl font-bold text-baer-dark">Delivery Information</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="fullName" value={form.fullName} onChange={handleChange} error={errors.fullName} placeholder="Amara Okafor" autoComplete="name" />
              <Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="0800 000 0000" autoComplete="tel" />
              <Field label="Email address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="amara@email.com" autoComplete="email" className="sm:col-span-2" />
              <Field label="Street address" name="address" value={form.address} onChange={handleChange} error={errors.address} placeholder="14 Adeola Odeku Street" autoComplete="street-address" className="sm:col-span-2" />
              <Field label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} placeholder="Lagos" autoComplete="address-level2" />
              <Field label="State" name="state" value={form.state} onChange={handleChange} error={errors.state} placeholder="Lagos State" autoComplete="address-level1" />
              <Field label="Country" name="country" value={form.country} onChange={handleChange} error={errors.country} autoComplete="country-name" />
            </div>

            <h2 className="mt-12 text-2xl font-bold text-baer-dark">Delivery Method</h2>
            <div className="mt-5 space-y-3" role="radiogroup" aria-label="Delivery method">
              {DELIVERY_METHODS.map((method) => {
                const selected = deliveryId === method.id
                const fee = deliveryFee(method.id, subtotal)
                return (
                  <label
                    key={method.id}
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded border px-5 py-4 ${
                      selected ? 'border-baer-gold bg-baer-cream' : 'border-baer-bdr bg-white'
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="delivery"
                        value={method.id}
                        checked={selected}
                        onChange={() => setDeliveryId(method.id)}
                        className="accent-[#1C1C1C]"
                      />
                      <span>
                        <span className="block text-sm font-medium text-baer-dark">{method.name}</span>
                        <span className="block text-[13px] text-baer-mid">{method.detail}</span>
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-baer-dark">{fee === 0 ? 'Free' : formatNaira(fee)}</span>
                  </label>
                )
              })}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-baer-dark">Payment Method</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Payment method">
              {PAYMENT_METHODS.map((method) => {
                const selected = paymentId === method.id
                return (
                  <label
                    key={method.id}
                    className={`flex cursor-pointer items-center gap-3 rounded border px-5 py-4 text-sm ${
                      selected ? 'border-baer-dark bg-baer-dark text-white' : 'border-baer-bdr bg-white text-baer-dark'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selected}
                      onChange={() => setPaymentId(method.id)}
                      className="accent-[#C9A86F]"
                    />
                    {method.name}
                  </label>
                )
              })}
            </div>
          </div>

          <aside className="h-fit rounded border border-baer-bdr bg-baer-surf p-6" aria-label="Order summary">
            <h2 className="text-2xl font-bold text-baer-dark">Order Summary</h2>

            <ul className="mt-5 space-y-3 border-t border-baer-bdr pt-5 text-sm">
              {items.map((line) => (
                <li key={line.key} className="flex justify-between gap-3">
                  <span className="text-baer-mid">
                    {line.name}
                    {line.size ? `, ${line.size}` : ''} &times; {line.qty}
                  </span>
                  <span className="font-medium text-baer-dark">{formatNaira(line.price * line.qty)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-3 border-t border-baer-bdr pt-5 text-sm">
              <div className="flex justify-between">
                <span className="text-baer-mid">Subtotal</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-baer-mid">Delivery</span>
                <span>{delivery === 0 ? 'Free' : formatNaira(delivery)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-baer-mid">Discount</span>
                <span>{discount > 0 ? `-${formatNaira(discount)}` : '-'}</span>
              </div>
            </div>

            <div className="mt-5 flex items-baseline justify-between border-t border-baer-bdr pt-5">
              <span className="text-base font-semibold text-baer-dark">Total</span>
              <span className="font-serif text-2xl font-bold text-baer-dark">{formatNaira(total)}</span>
            </div>

            <div className="mt-6 border-t border-baer-bdr pt-5">
              <label htmlFor="promo" className="field-label">
                Promo code
              </label>
              <div className="flex gap-2">
                <input
                  id="promo"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter code"
                  className="field"
                />
                <button type="button" onClick={applyPromo} className="btn-dark !px-5">
                  Apply
                </button>
              </div>
              {promoMessage ? (
                <p role="status" className="mt-2 text-xs text-baer-dark">
                  {promoMessage}
                </p>
              ) : null}
            </div>

            <button type="submit" disabled={submitting} className="btn-gold mt-6 w-full !py-4">
              {submitting ? 'Placing order...' : 'Place Order'}
            </button>
            <Link href="/cart" className="mt-3 block text-center text-[13px] text-baer-mid hover:text-baer-dark">
              &larr; Back to cart
            </Link>
          </aside>
        </form>
      )}
    </Layout>
  )
}
