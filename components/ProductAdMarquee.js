import Link from 'next/link'

const ADVERTISEMENTS = [
  {
    eyebrow: 'Fresh from the market',
    title: 'Make fresh the centrepiece.',
    description: 'Explore fruit, vegetables and everyday produce.',
    href: '/shop?category=fresh-produce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Fresh fruit and vegetables',
    action: 'Shop fresh produce',
  },
  {
    eyebrow: 'Stock the pantry',
    title: 'The everyday essentials.',
    description: 'Find staples for your next kitchen restock.',
    href: '/shop?category=pantry',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Pantry staples on grocery shelves',
    action: 'Browse pantry',
  },
  {
    eyebrow: 'Better everyday living',
    title: 'Care for the whole home.',
    description: 'Explore practical household essentials.',
    href: '/shop?category=household',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Household cleaning essentials',
    action: 'Shop home care',
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
    <section className="product-ad-section border-y border-baer-bdr bg-baer-cream py-8 sm:py-10" aria-label="Featured product promotions">
      <div className="shell mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Around the store</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-baer-dark sm:text-3xl">Worth a look.</h2>
        </div>
        <span className="hidden text-xs text-baer-mid sm:block">Discover something for your next shop</span>
      </div>
      <div className="product-ad-window" tabIndex={0} aria-label="Moving product advertisements. Hover or focus to pause.">
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
