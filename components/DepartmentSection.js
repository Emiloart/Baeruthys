import Link from 'next/link'
import { getDepartmentCategories } from '../data/products'

const CATEGORY_IMAGES = {
  'fresh-produce': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=640&q=85',
  'meat-seafood': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=640&q=85',
  'dairy-eggs': 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=640&q=85',
  bakery: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=640&q=85',
  pantry: 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=640&q=85',
  drinks: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=640&q=85',
  snacks: 'https://images.unsplash.com/photo-1621939514649-280e2aa2f8f5?auto=format&fit=crop&w=640&q=85',
  'frozen-foods': 'https://images.unsplash.com/photo- frozen-foods?auto=format&fit=crop&w=640&q=85',
  appliances: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=640&q=85',
  'home-kitchen': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=640&q=85',
  household: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=640&q=85',
  'furniture-decor': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=640&q=85',
  'bedding-bath': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=640&q=85',
  'storage-organisation': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=640&q=85',
  lighting: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=640&q=85',
  'home-improvement': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=640&q=85',
  'personal-care': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=640&q=85',
  'skincare-beauty': 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=640&q=85',
  haircare: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=640&q=85',
  'fragrance-grooming': 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=640&q=85',
  electronics: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=640&q=85',
  'phones-computing': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=640&q=85',
  'tv-audio': 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=640&q=85',
  'tech-accessories': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=640&q=85',
  fashion: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=640&q=85',
  'footwear-bags': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=640&q=85',
  'fashion-accessories': 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=640&q=85',
  'baby-kids': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=640&q=85',
  'baby-feeding-care': 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&w=640&q=85',
  'toys-games': 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=640&q=85',
  'health-wellness': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=640&q=85',
  'first-aid': 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=640&q=85',
  'office-stationery': 'https://images.unsplash.com/photo-1455390582262-044cdoor3?auto=format&fit=crop&w=640&q=85',
  'school-supplies': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=640&q=85',
  'garden-outdoor': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=640&q=85',
  'tools-hardware': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=640&q=85',
  'pet-supplies': 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=640&q=85',
}

export default function DepartmentSection({ department, index = 0 }) {
  const categories = getDepartmentCategories(department.slug)
  const reverse = index % 2 === 1

  return (
    <section className="department-section border-t border-baer-bdr py-12 sm:py-16">
      <div className="shell">
        <div className={`grid overflow-hidden border border-baer-bdr bg-white md:grid-cols-2 ${reverse ? 'md:[&>a]:order-2' : ''}`}>
          <Link href={`/shop?department=${department.slug}`} className="group relative min-h-[250px] overflow-hidden bg-baer-surf sm:min-h-[320px]">
            <img src={department.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">Department {String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-2 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">{department.name}</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/90">{department.description}</p>
              <span className="mt-5 inline-flex items-center gap-3 border-b border-white/70 pb-1 text-sm font-semibold">Shop department <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-8">
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-baer-dark sm:text-xl">Explore {department.name}</h3>
                <p className="mt-1 text-sm text-baer-mid">Choose a section to narrow your search.</p>
              </div>
              <Link href={`/shop?department=${department.slug}`} className="shrink-0 text-xs font-semibold text-baer-dark hover:text-baer-gold sm:text-sm">View all <span aria-hidden="true">→</span></Link>
            </div>

            <div className="department-carousel flex gap-3 overflow-x-auto pb-3" aria-label={`${department.name} subdepartments`}>
              {categories.map((category) => (
                <Link key={category.slug} href={`/shop?category=${category.slug}`} className="group w-[145px] shrink-0 sm:w-[160px]">
                  <div className="aspect-[4/3] overflow-hidden bg-baer-surf">
                    <img src={CATEGORY_IMAGES[category.slug] || department.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-start justify-between gap-2 py-3">
                    <span className="text-sm font-semibold leading-5 text-baer-dark">{category.name}</span>
                    <span className="mt-0.5 text-baer-gold" aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
