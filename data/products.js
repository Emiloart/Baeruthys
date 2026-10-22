// Sample catalog. Replace with real supplier items as they are sourced.
// `image` is null until real photos exist; components render an elegant placeholder.

export const CATEGORIES = [
  { slug: 'clothes', name: 'Clothes' },
  { slug: 'shoes', name: 'Shoes' },
  { slug: 'bags', name: 'Bags' },
  { slug: 'accessories', name: 'Accessories' },
  { slug: 'hair-nails', name: 'Hair & Nails' },
  { slug: 'watches', name: 'Watches' },
]

const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL']
const SHOE_SIZES = ['37', '38', '39', '40', '41', '42']

const C = {
  cream: { name: 'Cream', hex: '#F1E6D6' },
  black: { name: 'Black', hex: '#262626' },
  beige: { name: 'Beige', hex: '#D9CDBB' },
  tan: { name: 'Tan', hex: '#B98A5E' },
  navy: { name: 'Navy', hex: '#2B3550' },
  plum: { name: 'Plum', hex: '#5E4570' },
  white: { name: 'White', hex: '#FFFFFF' },
  gold: { name: 'Gold', hex: '#C9A86F' },
  silver: { name: 'Silver', hex: '#C4C4C4' },
  brown: { name: 'Brown', hex: '#6B4A33' },
}

export const PRODUCTS = [
  // Clothes
  {
    id: 'p001',
    slug: 'silk-wrap-dress',
    name: 'Silk Wrap Dress',
    price: 21000,
    category: 'clothes',
    tag: 'New',
    sizes: CLOTHING_SIZES,
    colors: [C.beige, C.black, C.cream, C.plum],
    rating: 4.5,
    reviews: 42,
    description:
      'A silk blend wrap dress with an adjustable tie waist and an elegant drape. Easy to dress up for events or down for brunch. Hand wash recommended.',
  },
  {
    id: 'p002',
    slug: 'linen-blazer',
    name: 'Linen Blazer',
    price: 35000,
    category: 'clothes',
    tag: 'Trending',
    sizes: CLOTHING_SIZES,
    colors: [C.cream, C.black],
    rating: 4.6,
    reviews: 28,
    description:
      'A relaxed, tailored linen blazer with a soft structure. Lightweight enough for warm days and sharp enough for the office.',
  },
  {
    id: 'p003',
    slug: 'crop-top-set',
    name: 'Crop Top Set',
    price: 12500,
    category: 'clothes',
    sizes: CLOTHING_SIZES,
    colors: [C.cream, C.black, C.tan],
    rating: 4.3,
    reviews: 17,
    description:
      'A matching crop top and skirt set in a soft stretch fabric. Comfortable, flattering and ready to wear straight away.',
  },
  {
    id: 'p004',
    slug: 'wide-leg-trousers',
    name: 'Wide Leg Trousers',
    price: 18000,
    category: 'clothes',
    sizes: CLOTHING_SIZES,
    colors: [C.black, C.beige, C.navy],
    rating: 4.4,
    reviews: 33,
    description:
      'High-waisted trousers with a fluid wide leg and a clean front. A wardrobe staple that works across seasons.',
  },
  {
    id: 'p005',
    slug: 'floral-midi-skirt',
    name: 'Floral Midi Skirt',
    price: 14500,
    category: 'clothes',
    tag: 'Sale',
    compareAt: 17500,
    sizes: CLOTHING_SIZES,
    colors: [C.cream, C.plum],
    rating: 4.2,
    reviews: 11,
    description:
      'A flowing midi skirt with a delicate floral print and an elasticated waist for all-day comfort.',
  },
  {
    id: 'p006',
    slug: 'puff-sleeve-blouse',
    name: 'Puff Sleeve Blouse',
    price: 11000,
    category: 'clothes',
    sizes: CLOTHING_SIZES,
    colors: [C.white, C.cream, C.black],
    rating: 4.5,
    reviews: 24,
    description:
      'A romantic blouse with gathered puff sleeves and a covered button front. Pairs well with trousers or skirts.',
  },

  // Shoes
  {
    id: 'p007',
    slug: 'block-heel-sandal',
    name: 'Block Heel Sandal',
    price: 21000,
    category: 'shoes',
    tag: 'New',
    sizes: SHOE_SIZES,
    colors: [C.tan, C.black, C.beige],
    rating: 4.4,
    reviews: 19,
    description:
      'A comfortable block heel sandal with an adjustable ankle strap. Stable enough to wear all day.',
  },
  {
    id: 'p008',
    slug: 'classic-leather-loafer',
    name: 'Classic Leather Loafer',
    price: 26500,
    category: 'shoes',
    sizes: SHOE_SIZES,
    colors: [C.black, C.brown],
    rating: 4.7,
    reviews: 36,
    description:
      'A polished loafer with a cushioned insole and a flexible sole. Timeless and easy to style.',
  },
  {
    id: 'p009',
    slug: 'pointed-kitten-heels',
    name: 'Pointed Kitten Heels',
    price: 19500,
    category: 'shoes',
    sizes: SHOE_SIZES,
    colors: [C.beige, C.black],
    rating: 4.3,
    reviews: 14,
    description:
      'A low kitten heel with a pointed toe. Elegant without the discomfort of a high heel.',
  },

  // Bags
  {
    id: 'p010',
    slug: 'leather-shoulder-bag',
    name: 'Leather Shoulder Bag',
    price: 24000,
    category: 'bags',
    tag: 'Trending',
    colors: [C.tan, C.black, C.cream],
    rating: 4.6,
    reviews: 51,
    description:
      'A structured shoulder bag in soft faux leather with a magnetic closure and an inner zip pocket.',
  },
  {
    id: 'p011',
    slug: 'mini-crossbody-bag',
    name: 'Mini Crossbody Bag',
    price: 15500,
    category: 'bags',
    tag: 'New',
    colors: [C.black, C.beige, C.plum],
    rating: 4.4,
    reviews: 22,
    description:
      'A compact crossbody with an adjustable strap. Holds a phone, cards and keys without the bulk.',
  },
  {
    id: 'p012',
    slug: 'woven-tote',
    name: 'Woven Tote',
    price: 17800,
    category: 'bags',
    colors: [C.tan, C.cream],
    rating: 4.2,
    reviews: 9,
    description:
      'A roomy woven tote with sturdy handles. Ideal for the market, the beach or a day out.',
  },

  // Accessories
  {
    id: 'p013',
    slug: 'pearl-drop-earrings',
    name: 'Pearl Drop Earrings',
    price: 6500,
    category: 'accessories',
    colors: [C.gold, C.silver],
    rating: 4.6,
    reviews: 38,
    description:
      'Freshwater-style pearl drops on hypoallergenic posts. Light enough for everyday wear.',
  },
  {
    id: 'p014',
    slug: 'gold-chain-bracelet',
    name: 'Gold Chain Bracelet',
    price: 7200,
    category: 'accessories',
    tag: 'New',
    colors: [C.gold, C.silver],
    rating: 4.5,
    reviews: 30,
    description:
      'A delicate chain bracelet with an adjustable clasp. Stacks well with other pieces.',
  },
  {
    id: 'p015',
    slug: 'silver-hoop-earrings',
    name: 'Silver Hoop Earrings',
    price: 5800,
    category: 'accessories',
    colors: [C.silver, C.gold],
    rating: 4.4,
    reviews: 27,
    description:
      'Classic medium hoops with a smooth, polished finish and a secure snap closure.',
  },
  {
    id: 'p016',
    slug: 'tortoise-cat-eye-glasses',
    name: 'Tortoise Cat Eye Glasses',
    price: 8900,
    category: 'accessories',
    colors: [C.brown, C.black],
    rating: 4.3,
    reviews: 15,
    description:
      'Cat eye frames with UV protection lenses and a lightweight tortoise finish.',
  },
  {
    id: 'p017',
    slug: 'woven-sun-hat',
    name: 'Woven Sun Hat',
    price: 9800,
    category: 'accessories',
    tag: 'Sale',
    compareAt: 12000,
    colors: [C.tan, C.cream],
    rating: 4.1,
    reviews: 8,
    description:
      'A wide brim woven hat that keeps the sun off while adding polish to any outfit.',
  },
  {
    id: 'p018',
    slug: 'leather-key-holder',
    name: 'Leather Key Holder',
    price: 3500,
    category: 'accessories',
    colors: [C.black, C.tan],
    rating: 4.5,
    reviews: 21,
    description:
      'A slim key holder with a snap closure and a gold-tone ring. Keeps keys quiet and organized.',
  },
  {
    id: 'p019',
    slug: 'padded-phone-pouch',
    name: 'Padded Phone Pouch',
    price: 4800,
    category: 'accessories',
    colors: [C.cream, C.black, C.plum],
    rating: 4.2,
    reviews: 12,
    description:
      'A padded pouch with a detachable wrist strap and a card slot. Protects your phone and doubles as a mini clutch.',
  },

  // Hair & Nails
  {
    id: 'p020',
    slug: 'silk-hair-scrunchie-set',
    name: 'Silk Hair Scrunchie Set',
    price: 3200,
    category: 'hair-nails',
    colors: [C.cream, C.black, C.plum],
    rating: 4.4,
    reviews: 18,
    description:
      'A set of three silk-feel scrunchies that hold hair gently without creasing or pulling.',
  },
  {
    id: 'p021',
    slug: 'press-on-nail-set',
    name: 'Press-On Nail Set',
    price: 4500,
    category: 'hair-nails',
    tag: 'Trending',
    colors: [C.cream, C.plum],
    rating: 4.3,
    reviews: 44,
    description:
      'A reusable set of 24 press-on nails with adhesive tabs, in multiple sizes for a salon finish at home.',
  },
  {
    id: 'p022',
    slug: 'claw-clip-trio',
    name: 'Claw Clip Trio',
    price: 3800,
    category: 'hair-nails',
    colors: [C.tan, C.black, C.cream],
    rating: 4.5,
    reviews: 26,
    description:
      'Three strong-hold claw clips in neutral tones for quick updos.',
  },

  // Watches
  {
    id: 'p023',
    slug: 'minimalist-gold-watch',
    name: 'Minimalist Gold Watch',
    price: 16500,
    category: 'watches',
    tag: 'Trending',
    colors: [C.gold, C.silver],
    rating: 4.6,
    reviews: 33,
    description:
      'A slim case, a clean dial and a stainless steel mesh strap. Understated and timeless.',
  },
  {
    id: 'p024',
    slug: 'leather-strap-watch',
    name: 'Leather Strap Watch',
    price: 14200,
    category: 'watches',
    colors: [C.brown, C.black],
    rating: 4.4,
    reviews: 20,
    description:
      'A classic round dial watch on a genuine leather strap with a buckle closure.',
  },
]

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS
  return PRODUCTS.filter((p) => p.category === categorySlug)
}

export function getCategoryName(categorySlug) {
  const match = CATEGORIES.find((c) => c.slug === categorySlug)
  return match ? match.name : 'All Products'
}

export function getRelatedProducts(product, limit = 4) {
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  )
  const others = PRODUCTS.filter(
    (p) => p.category !== product.category && p.id !== product.id
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function getFeaturedProducts(limit = 4) {
  return PRODUCTS.filter((p) => p.tag === 'Trending' || p.tag === 'New').slice(0, limit)
}

export function getNewArrivals(limit = 4) {
  return PRODUCTS.filter((p) => p.tag === 'New').slice(0, limit)
}
