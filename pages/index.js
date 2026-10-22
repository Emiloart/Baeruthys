import Link from 'next/link'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, getFeaturedProducts, getNewArrivals } from '../data/products'
import { DELIVERY_METHODS, FREE_SHIPPING_THRESHOLD } from '../lib/site'
import { formatNaira } from '../lib/format'

function SectionHeading({ title, subtitle, href, linkLabel = 'View All' }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold text-baer-dark sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-baer-mid">{subtitle}</p> : null}
      </div>
      {href ? (
        <Link href={href} className="whitespace-nowrap text-[13px] font-medium text-baer-dark hover:text-baer-gold">
          {linkLabel} &rarr;
        </Link>
      ) : null}
    </div>
  )
}

export default function Home() {
  const featured = getFeaturedProducts(4)
  const arrivals = getNewArrivals(4)
  const standard = DELIVERY_METHODS.find((m) => m.id === 'standard')

  return (
    <Layout
      title="Elegance in Every Detail"
      description="Curated fashion, accessories and lifestyle essentials from Baeruthys. Clothes, shoes, bags, jewelry, watches and more."
    >
      {/* Hero */}
      <section className="bg-baer-cream">
        <div className="shell grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-14 bg-baer-gold" />
              <span className="eyebrow">New Season</span>
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.1] text-baer-dark sm:text-6xl lg:text-7xl">
              Elegance in
              <br />
              Every Detail
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-baer-mid">
              Curated fashion, accessories and lifestyle essentials, delivered to your door.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href="/shop" className="btn-dark">
                Shop Now
              </Link>
              <Link href="#collections" className="text-sm font-medium text-baer-dark hover:text-baer-gold">
                Explore Collections &rarr;
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 rounded-sm bg-baer-surf" />
            <div className="absolute inset-6 rounded-sm border border-baer-gold/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[9rem] leading-none text-baer-gold/60">B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="collections" className="bg-baer-bg py-16 sm:py-20">
        <div className="shell">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-baer-dark sm:text-4xl">Shop by Category</h2>
            <p className="mt-2 text-sm text-baer-mid">Discover our curated collections</p>
            <div className="gold-rule mt-5" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="group overflow-hidden rounded border border-baer-bdr bg-white"
              >
                <div className="flex aspect-[4/5] items-center justify-center bg-baer-surf transition-colors group-hover:bg-baer-cream">
                  <span className="font-serif text-6xl text-baer-gold/60">{category.name.charAt(0)}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-[13px] font-medium text-baer-dark">{category.name}</span>
                  <span className="text-baer-gold">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-baer-bdr bg-baer-surf py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            title="Featured Picks"
            subtitle="Handpicked trending items, selected for quality and style"
            href="/shop"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand quote */}
      <section className="bg-baer-cream py-16 text-center sm:py-20">
        <div className="shell">
          <div className="gold-rule" />
          <p className="mt-6 font-serif text-3xl italic text-baer-dark sm:text-4xl">
            &ldquo;Where Style Meets Intention&rdquo;
          </p>
          <p className="mt-4 text-sm text-baer-mid">Baeruthys, curating elegance one piece at a time.</p>
        </div>
      </section>

      {/* New arrivals */}
      <section className="bg-baer-bg py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            title="New Arrivals"
            subtitle="Fresh drops, updated as new pieces become available"
            href="/shop?filter=new"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {arrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-baer-bdr bg-baer-surf">
        <div className="shell grid gap-6 py-8 text-center text-sm font-medium text-baer-dark sm:grid-cols-3">
          <div>Free delivery over {formatNaira(FREE_SHIPPING_THRESHOLD)}</div>
          <div>Curated trending pieces</div>
          <div>
            Standard delivery in {standard ? standard.detail : '3 to 5 business days'}
          </div>
        </div>
      </section>
    </Layout>
  )
}
