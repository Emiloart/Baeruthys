// Starter catalogue for Baeruthys. Product records remain demonstration data until supplier,
// pricing, stock and availability feeds are connected.

export const DEPARTMENTS = [
  {
    slug: 'food-groceries',
    name: 'Food & Groceries',
    description: 'Fresh food, pantry staples and everything for the everyday shop.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85',
    categories: ['fresh-produce', 'meat-seafood', 'dairy-eggs', 'bakery', 'pantry', 'drinks', 'snacks', 'frozen-foods'],
  },
  {
    slug: 'home-living',
    name: 'Home & Living',
    description: 'Appliances, kitchen essentials and thoughtful things for every room.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
    categories: ['appliances', 'home-kitchen', 'household', 'furniture-decor', 'bedding-bath', 'storage-organisation', 'lighting', 'home-improvement'],
  },
  {
    slug: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description: 'Everyday care, grooming and beauty essentials.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85',
    categories: ['personal-care', 'skincare-beauty', 'haircare', 'fragrance-grooming'],
  },
  {
    slug: 'electronics-technology',
    name: 'Electronics & Technology',
    description: 'Personal technology, entertainment and useful accessories.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=85',
    categories: ['electronics', 'phones-computing', 'tv-audio', 'tech-accessories'],
  },
  {
    slug: 'fashion-accessories',
    name: 'Fashion & Accessories',
    description: 'Clothing, footwear, bags and finishing touches.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85',
    categories: ['fashion', 'footwear-bags', 'fashion-accessories'],
  },
  {
    slug: 'baby-kids',
    name: 'Baby & Kids',
    description: 'Practical essentials for babies, children and family routines.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1400&q=85',
    categories: ['baby-kids', 'baby-feeding-care', 'toys-games'],
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Everyday wellbeing and personal health essentials.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85',
    categories: ['health-wellness', 'first-aid'],
  },
  {
    slug: 'office-school',
    name: 'Office, School & Stationery',
    description: 'Supplies for studying, working and getting organised.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdoor3?auto=format&fit=crop&w=1400&q=85',
    categories: ['office-stationery', 'school-supplies'],
  },
  {
    slug: 'outdoor-garden-diy',
    name: 'Outdoor, Garden & DIY',
    description: 'Tools and essentials for projects, gardens and outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85',
    categories: ['garden-outdoor', 'tools-hardware'],
  },
  {
    slug: 'pet-supplies',
    name: 'Pet Supplies',
    description: 'Food, care and accessories for household pets.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1400&q=85',
    categories: ['pet-supplies'],
  },
]

export const CATEGORIES = [
  { slug: 'fresh-produce', name: 'Fresh Produce', department: 'food-groceries' },
  { slug: 'meat-seafood', name: 'Meat, Fish & Seafood', department: 'food-groceries' },
  { slug: 'dairy-eggs', name: 'Dairy, Eggs & Chilled', department: 'food-groceries' },
  { slug: 'bakery', name: 'Bakery & Desserts', department: 'food-groceries' },
  { slug: 'pantry', name: 'Pantry & Cooking Essentials', department: 'food-groceries' },
  { slug: 'drinks', name: 'Drinks & Beverages', department: 'food-groceries' },
  { slug: 'snacks', name: 'Snacks & Confectionery', department: 'food-groceries' },
  { slug: 'frozen-foods', name: 'Frozen Foods', department: 'food-groceries' },
  { slug: 'appliances', name: 'Home Appliances', department: 'home-living' },
  { slug: 'home-kitchen', name: 'Kitchen & Dining', department: 'home-living' },
  { slug: 'household', name: 'Cleaning & Household Care', department: 'home-living' },
  { slug: 'furniture-decor', name: 'Furniture & Decor', department: 'home-living' },
  { slug: 'bedding-bath', name: 'Bedding & Bath', department: 'home-living' },
  { slug: 'storage-organisation', name: 'Storage & Organisation', department: 'home-living' },
  { slug: 'lighting', name: 'Lighting', department: 'home-living' },
  { slug: 'home-improvement', name: 'Home Improvement', department: 'home-living' },
  { slug: 'personal-care', name: 'Personal Care', department: 'beauty-personal-care' },
  { slug: 'skincare-beauty', name: 'Skincare & Beauty', department: 'beauty-personal-care' },
  { slug: 'haircare', name: 'Haircare', department: 'beauty-personal-care' },
  { slug: 'fragrance-grooming', name: 'Fragrance & Grooming', department: 'beauty-personal-care' },
  { slug: 'electronics', name: 'Electronics', department: 'electronics-technology' },
  { slug: 'phones-computing', name: 'Phones & Computing', department: 'electronics-technology' },
  { slug: 'tv-audio', name: 'TV & Audio', department: 'electronics-technology' },
  { slug: 'tech-accessories', name: 'Technology Accessories', department: 'electronics-technology' },
  { slug: 'fashion', name: 'Clothing', department: 'fashion-accessories' },
  { slug: 'footwear-bags', name: 'Footwear & Bags', department: 'fashion-accessories' },
  { slug: 'fashion-accessories', name: 'Fashion Accessories', department: 'fashion-accessories' },
  { slug: 'baby-kids', name: 'Baby & Kids Essentials', department: 'baby-kids' },
  { slug: 'baby-feeding-care', name: 'Baby Feeding & Care', department: 'baby-kids' },
  { slug: 'toys-games', name: 'Toys & Games', department: 'baby-kids' },
  { slug: 'health-wellness', name: 'Health & Wellness', department: 'health-wellness' },
  { slug: 'first-aid', name: 'First Aid', department: 'health-wellness' },
  { slug: 'office-stationery', name: 'Office & Stationery', department: 'office-school' },
  { slug: 'school-supplies', name: 'School Supplies', department: 'office-school' },
  { slug: 'garden-outdoor', name: 'Garden & Outdoor', department: 'outdoor-garden-diy' },
  { slug: 'tools-hardware', name: 'Tools & Hardware', department: 'outdoor-garden-diy' },
  { slug: 'pet-supplies', name: 'Pet Supplies', department: 'pet-supplies' },
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

export function getDepartmentBySlug(departmentSlug) {
  return DEPARTMENTS.find((department) => department.slug === departmentSlug) || null
}

export function getDepartmentCategories(departmentSlug) {
  const department = getDepartmentBySlug(departmentSlug)
  return department ? CATEGORIES.filter((category) => category.department === department.slug) : []
}

export function getDepartmentForCategory(categorySlug) {
  const category = CATEGORIES.find((item) => item.slug === categorySlug)
  return category ? getDepartmentBySlug(category.department) : null
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
