import Link from 'next/link'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, PRODUCTS, getFeaturedProducts, getNewArrivals } from '../data/products'
import { DELIVERY_METHODS, FREE_SHIPPING_THRESHOLD } from '../lib/site'
import { formatNaira } from '../lib/format'

function SectionHeading({ title, subtitle, href, linkLabel = 'Shop all' }) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-baer-dark sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-xl text-sm leading-6 text-baer-mid">{subtitle}</p> : null}
      </div>
      {href ? (
        <Link href={href} className="whitespace-nowrap text-sm font-semibold text-baer-dark transition-colors hover:text-baer-gold">
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  )
}

const CATEGORY_IMAGES = {
  'fresh-produce': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85',
  pantry: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=900&q=85',
  drinks: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85',
  'dairy-eggs': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=85',
  'meat-seafood': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85',
  bakery: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85',
  household: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=900&q=85',
  'personal-care': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85',
  'home-kitchen': 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85',
  electronics: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85',
  fashion: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
  'baby-kids': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85',
}

export default function Home() {
  const featured = getFeaturedProducts(8)
  const arrivals = getNewArrivals(4)
  const standard = DELIVERY_METHODS.find((method) => method.id === 'standard')

  return (
    <Layout
      title="Your Everyday Store"
      description="Shop groceries, fresh produce, pantry staples, drinks, household essentials, personal care, homeware and more at Baeruthys."
    >
      <section className="bg-baer-cream">
        <div className="shell grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-baer-bdr bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-baer-dark">
              <span className="h-2 w-2 rounded-full bg-baer-gold" />
              One store. More of life.
            </div>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] text-baer-dark sm:text-5xl lg:text-6xl">
              Your whole list, <span className="font-normal italic">in one place.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-baer-mid">
              From fresh market picks and pantry staples to home essentials and everyday finds, make your next shop simpler.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-dark">Start your shop <span className="ml-3" aria-hidden="true">→</span></Link>
              <Link href="#departments" className="btn-outline">Explore departments</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-baer-bdr pt-5 text-xs text-baer-mid">
              <span>Everyday essentials</span>
              <span>One convenient basket</span>
              <span>Prices in Nigerian naira</span>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-sm bg-baer-surf sm:min-h-[420px]">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85" alt="Fresh market produce" className="h-full w-full object-cover" />
              </div>
              <div className="grid grid-rows-2">
                <div className="overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=900&q=85" alt="Grocery shelves and pantry staples" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85" alt="Ingredients prepared for everyday cooking" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 bg-white/95 p-4 sm:inset-x-5 sm:bottom-5 sm:p-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-baer-mid">The weekly shop</p>
                <p className="mt-1 font-serif text-xl font-bold text-baer-dark sm:text-2xl">Good things, all together.</p>
              </div>
              <Link href="/shop?category=fresh-produce" className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-baer-dark text-xl text-white transition-colors hover:bg-baer-ink" aria-label="Shop fresh produce">→</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-baer-bdr bg-white">
        <div className="shell grid gap-4 py-5 sm:grid-cols-3 sm:gap-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-baer-surf text-baer-dark">01</span>
            <div><p className="text-sm font-semibold text-baer-dark">A bigger kind of store</p><p className="mt-1 text-xs leading-5 text-baer-mid">Groceries and everyday essentials together.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-baer-surf text-baer-dark">02</span>
            <div><p className="text-sm font-semibold text-baer-dark">Shop your way</p><p className="mt-1 text-xs leading-5 text-baer-mid">Browse by department or search your list.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-baer-surf text-baer-dark">03</span>
            <div><p className="text-sm font-semibold text-baer-dark">Delivery details upfront</p><p className="mt-1 text-xs leading-5 text-baer-mid">Clear delivery options at checkout.</p></div>
          </div>
        </div>
      </section>

      <section id="departments" className="bg-baer-bg py-12 sm:py-16">
        <div className="shell">
          <SectionHeading title="Explore departments" subtitle="A growing range for the kitchen, home, personal care and beyond." href="/shop" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
            {CATEGORIES.map((category) => (
              <Link key={category.slug} href={`/shop?category=${category.slug}`} className="group overflow-hidden rounded-sm border border-baer-bdr bg-white">
                <div className="aspect-[5/4] overflow-hidden bg-baer-surf">
                  <img src={CATEGORY_IMAGES[category.slug] || CATEGORY_IMAGES.pantry} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex min-h-14 items-center justify-between gap-2 px-3 py-3 sm:px-4">
                  <span className="text-xs font-semibold text-baer-dark sm:text-[13px]">{category.name}</span>
                  <span className="text-baer-gold transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-baer-bdr bg-baer-surf py-12 sm:py-16">
        <div className="shell">
          <SectionHeading title="Everyday favourites" subtitle="Popular picks to help get the essentials into your basket." href="/shop" />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-baer-bg py-12 sm:py-16">
        <div className="shell grid overflow-hidden rounded-sm border border-baer-bdr bg-white md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="eyebrow">Make room for more</p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-baer-dark sm:text-4xl">From the first item to the last, shop in one basket.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-baer-mid">Build a shopping list across departments, keep your favourites close and manage your basket as you go.</p>
            <Link href="/shop" className="btn-dark mt-7">Browse the store <span className="ml-3" aria-hidden="true">→</span></Link>
          </div>
          <div className="grid min-h-[260px] grid-cols-2">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85" alt="Fresh produce" loading="lazy" className="h-full w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85" alt="Freshly baked bread" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {arrivals.length > 0 && (
        <section className="border-t border-baer-bdr bg-baer-surf py-12 sm:py-16">
          <div className="shell">
            <SectionHeading title="Just added" subtitle="New items joining the Baeruthys range." href="/shop?filter=new" />
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
              {arrivals.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-baer-bdr bg-baer-cream">
        <div className="shell grid gap-5 py-7 text-sm sm:grid-cols-3 sm:gap-8">
          <div><p className="font-semibold text-baer-dark">Free standard delivery</p><p className="mt-1 text-xs text-baer-mid">On orders over {formatNaira(FREE_SHIPPING_THRESHOLD)}.</p></div>
          <div><p className="font-semibold text-baer-dark">Delivery options</p><p className="mt-1 text-xs text-baer-mid">{standard ? standard.detail : 'Delivery details shown at checkout'} for standard delivery.</p></div>
          <div><p className="font-semibold text-baer-dark">One growing catalogue</p><p className="mt-1 text-xs text-baer-mid">More departments and products as the range expands.</p></div>
        </div>
      </section>
    </Layout>
  )
}
