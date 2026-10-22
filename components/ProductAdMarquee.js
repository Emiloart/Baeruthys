import Link from 'next/link'

const ADVERTISEMENTS = [
  {
    eyebrow: 'Food & Groceries',
    title: 'Build a better weekly shop.',
    description: 'Fresh produce, pantry staples, chilled food and more.',
    href: '/shop?department=food-groceries',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Fresh produce and groceries',
    action: 'Explore food',
  },
  {
    eyebrow: 'Home & Living',
    title: 'Make more of your space.',
    description: 'Explore appliances and essentials for every room.',
    href: '/shop?department=home-living',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Home appliances and kitchen essentials',
    action: 'Explore home',
  },
  {
    eyebrow: 'Electronics & Technology',
    title: 'Useful tech for every day.',
    description: 'Discover personal technology and everyday accessories.',
    href: '/shop?department=electronics-technology',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Consumer electronics and technology',
    action: 'Explore technology',
  },
  {
    eyebrow: 'Beauty & Personal Care',
    title: 'The essentials that are yours.',
    description: 'Browse everyday care, grooming and beauty products.',
    href: '/shop?department=beauty-personal-care',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Beauty and personal care products',
    action: 'Explore personal care',
  },
]

function AdCard({ ad }) {
  return (
    <article className="product-ad-card">
      <div className="product-ad-copy">
        <p className="eyebrow">{ad.eyebrow}</p>
        <h3 className="mt-2 max-w-[17rem] font-serif text-xl font-bold leading-tight text-baer-dark sm:text-2xl">{ad.title}</h3>
        <p className="mt-2 max-w-xs text-xs leading-5 text-baer-mid sm:text-sm">{ad.description}</p>
        <Link href={ad.href} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-baer-dark transition-colors hover:text-baer-gold sm:text-sm">
          {ad.action} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Link href={ad.href} tabIndex={-1} aria-hidden="true" className="product-ad-image">
        <img src={ad.image} alt={ad.imageAlt} loading="lazy" />
      </Link>
    </article>
  )
}

export default function ProductAdMarquee() {
  return (
    <section className="product-ad-section border-y border-baer-bdr bg-baer-cream py-8 sm:py-10" aria-label="Featured department promotions">
      <div className="shell mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Across Baeruthys</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-baer-dark sm:text-3xl">More to explore.</h2>
        </div>
        <span className="hidden text-xs text-baer-mid sm:block">Discover something for your next shop</span>
      </div>
      <div className="product-ad-window" tabIndex={0} aria-label="Moving department promotions. Hover or focus to pause.">
        <div className="product-ad-track">
          <div className="product-ad-group">
            {ADVERTISEMENTS.map((ad) => <AdCard key={ad.eyebrow} ad={ad} />)}
          </div>
          <div className="product-ad-group" aria-hidden="true">
            {ADVERTISEMENTS.map((ad) => <AdCard key={`repeat-${ad.eyebrow}`} ad={ad} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
