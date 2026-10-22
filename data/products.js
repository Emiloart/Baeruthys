// Starter catalog for the Baeruthys multi-department online supermarket.
// Product records are demonstration data until supplier, pricing and availability feeds are connected.

export const CATEGORIES = [
  { slug: 'fresh-produce', name: 'Fresh Produce' },
  { slug: 'pantry', name: 'Pantry & Staples' },
  { slug: 'drinks', name: 'Drinks' },
  { slug: 'dairy-eggs', name: 'Dairy & Eggs' },
  { slug: 'meat-seafood', name: 'Meat & Seafood' },
  { slug: 'bakery', name: 'Bakery' },
  { slug: 'household', name: 'Home Care' },
  { slug: 'personal-care', name: 'Personal Care' },
  { slug: 'home-kitchen', name: 'Home & Kitchen' },
  { slug: 'electronics', name: 'Electronics' },
  { slug: 'fashion', name: 'Fashion' },
  { slug: 'baby-kids', name: 'Baby & Kids' },
]

const C = {
  cream: { name: 'Cream', hex: '#F1E6D6' },
  black: { name: 'Black', hex: '#262626' },
  beige: { name: 'Beige', hex: '#D9CDBB' },
  green: { name: 'Green', hex: '#66815A' },
  white: { name: 'White', hex: '#FFFFFF' },
}

export const PRODUCTS = [
  { id: 'p001', slug: 'fresh-bananas', name: 'Fresh Bananas', price: 1800, category: 'fresh-produce', tag: 'Trending', unit: 'bunch', description: 'Ripe bananas selected for everyday snacking, smoothies and breakfast.', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85' },
  { id: 'p002', slug: 'red-apples', name: 'Red Apples', price: 3500, category: 'fresh-produce', tag: 'Popular', unit: 'pack of 4', description: 'Crisp red apples for lunchboxes, fruit bowls and snacks.', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85' },
  { id: 'p003', slug: 'ripe-avocados', name: 'Ripe Avocados', price: 2800, category: 'fresh-produce', unit: 'pack of 2', description: 'Creamy avocados for toast, salads and homemade dips.', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=900&q=85' },
  { id: 'p004', slug: 'fresh-tomatoes', name: 'Fresh Tomatoes', price: 2200, category: 'fresh-produce', unit: '1 kg', description: 'Everyday tomatoes for stews, sauces and fresh salads.', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85' },
  { id: 'p005', slug: 'long-grain-rice', name: 'Long Grain Rice', price: 8500, category: 'pantry', tag: 'Popular', unit: '5 kg', description: 'Versatile long-grain rice for family meals and meal preparation.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85' },
  { id: 'p006', slug: 'spaghetti-pasta', name: 'Spaghetti Pasta', price: 1600, category: 'pantry', unit: '500 g', description: 'A pantry staple for quick pasta dishes and family dinners.', image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=900&q=85' },
  { id: 'p007', slug: 'cooking-oil', name: 'Vegetable Cooking Oil', price: 6200, category: 'pantry', unit: '1 litre', description: 'Everyday cooking oil for frying, sautéing and baking.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85' },
  { id: 'p008', slug: 'rolled-oats', name: 'Rolled Oats', price: 3900, category: 'pantry', tag: 'New', unit: '1 kg', description: 'A simple breakfast base for porridge, overnight oats and baking.', image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=85' },
  { id: 'p009', slug: 'orange-juice', name: 'Orange Juice', price: 2400, category: 'drinks', unit: '1 litre', description: 'A chilled-fridge favourite for breakfast and everyday refreshment.', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85' },
  { id: 'p010', slug: 'sparkling-water', name: 'Sparkling Water', price: 1200, category: 'drinks', tag: 'Trending', unit: '750 ml', description: 'Lightly sparkling water to serve chilled with meals or on its own.', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=85' },
  { id: 'p011', slug: 'ground-coffee', name: 'Ground Coffee', price: 5400, category: 'drinks', unit: '250 g', description: 'Aromatic ground coffee for a dependable morning brew.', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=85' },
  { id: 'p012', slug: 'whole-milk', name: 'Whole Milk', price: 2200, category: 'dairy-eggs', unit: '1 litre', description: 'Whole milk for cereal, tea, coffee and home cooking.', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=85' },
  { id: 'p013', slug: 'free-range-eggs', name: 'Fresh Eggs', price: 4200, category: 'dairy-eggs', tag: 'Popular', unit: 'crate of 15', description: 'Everyday eggs for breakfast, baking and quick meals.', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85' },
  { id: 'p014', slug: 'cheddar-cheese', name: 'Cheddar Cheese', price: 4800, category: 'dairy-eggs', unit: '200 g', description: 'A versatile cheese for sandwiches, snacks and cooking.', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=85' },
  { id: 'p015', slug: 'chicken-breast', name: 'Chicken Breast', price: 6800, category: 'meat-seafood', unit: '1 kg', description: 'A versatile protein for grilling, roasting and weekday meals.', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85' },
  { id: 'p016', slug: 'frozen-prawns', name: 'Frozen Prawns', price: 9500, category: 'meat-seafood', tag: 'New', unit: '500 g', description: 'Convenient frozen prawns for stir-fries, pasta and rice dishes.', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85' },
  { id: 'p017', slug: 'whole-wheat-bread', name: 'Whole Wheat Bread', price: 1800, category: 'bakery', unit: 'loaf', description: 'Sliced whole wheat bread for toast, sandwiches and breakfast.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85' },
  { id: 'p018', slug: 'butter-croissants', name: 'Butter Croissants', price: 2600, category: 'bakery', tag: 'Popular', unit: 'pack of 4', description: 'Flaky pastries for breakfast, brunch and afternoon treats.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85' },
  { id: 'p019', slug: 'laundry-detergent', name: 'Laundry Detergent', price: 5700, category: 'household', unit: '2 kg', description: 'Laundry detergent for routine household washing.', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=900&q=85' },
  { id: 'p020', slug: 'dishwashing-liquid', name: 'Dishwashing Liquid', price: 1900, category: 'household', unit: '750 ml', description: 'Dishwashing liquid for everyday kitchen clean-up.', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=85' },
  { id: 'p021', slug: 'body-wash', name: 'Daily Body Wash', price: 3200, category: 'personal-care', unit: '500 ml', description: 'A daily body wash for your bathroom essentials shelf.', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85' },
  { id: 'p022', slug: 'toothpaste-multipack', name: 'Toothpaste Multipack', price: 2900, category: 'personal-care', unit: 'pack of 3', description: 'A practical multipack for the household bathroom cabinet.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85' },
  { id: 'p023', slug: 'food-storage-set', name: 'Food Storage Set', price: 7500, category: 'home-kitchen', tag: 'New', unit: 'set of 5', description: 'Reusable food containers to organise pantry ingredients and leftovers.', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85' },
  { id: 'p024', slug: 'wireless-earbuds', name: 'Wireless Earbuds', price: 18500, category: 'electronics', tag: 'Trending', unit: '1 set', description: 'Compact wireless earbuds for calls, music and everyday listening.', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85' },
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
  const sameCategory = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id)
  const others = PRODUCTS.filter((p) => p.category !== product.category && p.id !== product.id)
  return [...sameCategory, ...others].slice(0, limit)
}

export function getFeaturedProducts(limit = 4) {
  return PRODUCTS.filter((p) => p.tag === 'Trending' || p.tag === 'Popular').slice(0, limit)
}

export function getNewArrivals(limit = 4) {
  return PRODUCTS.filter((p) => p.tag === 'New').slice(0, limit)
}
