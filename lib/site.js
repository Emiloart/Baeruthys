// Store-wide settings. Edit these values to change behaviour across the whole site.

export const SITE = {
  name: 'Baeruthys',
  tagline: 'Elegance in every detail.',
}

// Orders at or above this subtotal get free standard delivery.
export const FREE_SHIPPING_THRESHOLD = 50000

export const DELIVERY_METHODS = [
  { id: 'standard', name: 'Standard Delivery', detail: '3 to 5 business days', price: 2000 },
  { id: 'express', name: 'Express Delivery', detail: '1 to 2 business days', price: 5000 },
  { id: 'pickup', name: 'Pick-up Station', detail: 'Collect at your nearest hub', price: 0 },
]

// Placeholder methods. Real payment processing is added once a provider is chosen.
export const PAYMENT_METHODS = [
  { id: 'card', name: 'Pay with Card' },
  { id: 'transfer', name: 'Bank Transfer' },
  { id: 'ussd', name: 'USSD' },
  { id: 'cod', name: 'Pay on Delivery' },
]

// Demo promo codes. type "percent" takes a percentage off the subtotal.
export const PROMO_CODES = {
  WELCOME10: { type: 'percent', value: 10, label: '10% off' },
}

export function deliveryFee(methodId, subtotal) {
  const method = DELIVERY_METHODS.find((m) => m.id === methodId) || DELIVERY_METHODS[0]
  if (method.id === 'standard' && subtotal >= FREE_SHIPPING_THRESHOLD) return 0
  return method.price
}

export function promoDiscount(code, subtotal) {
  const promo = code ? PROMO_CODES[String(code).trim().toUpperCase()] : null
  if (!promo) return 0
  if (promo.type === 'percent') return Math.round((subtotal * promo.value) / 100)
  return 0
}
