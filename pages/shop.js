import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, DEPARTMENTS, PRODUCTS, getCategoryName, getDepartmentBySlug } from '../data/products'

const PRICE_RANGES = [
  { id: 'u5', label: 'Under \u20A65,000', min: 0, max: 4999 },
  { id: 'r5', label: '\u20A65,000 to \u20A615,000', min: 5000, max: 15000 },
  { id: 'r15', label: '\u20A615,000 to \u20A630,000', min: 15001, max: 30000 },
  { id: 'o30', label: 'Above \u20A630,000', min: 30001, max: Infinity },
]

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'Newest' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
]

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-baer-bdr py-5 first:pt-0 last:border-b-0">
      <h3 className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-baer-dark">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Check({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-baer-dark">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 rounded-sm border-baer-bdr accent-[#1C1C1C]"
      />
      {label}
    </label>
  )
}

export default function Shop() {
  const router = useRouter()
  const { category = 'all', department = 'all', filter = '', q = '' } = router.query
  const categorySlug = Array.isArray(category) ? category[0] : category
  const departmentSlug = Array.isArray(department) ? department[0] : department
  const filterMode = Array.isArray(filter) ? filter[0] : filter
  const searchTerm = (Array.isArray(q) ? q[0] : q).trim().toLowerCase()

  const [sizes, setSizes] = useState([])
  const [colors, setColors] = useState([])
  const [ranges, setRanges] = useState([])
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Products matching the page-level choice (category, new, sale, search).
  const baseProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (categorySlug !== 'all' && p.category !== categorySlug) return false
      if (departmentSlug !== 'all') {
        const departmentCategories = CATEGORIES.filter((item) => item.department === departmentSlug).map((item) => item.slug)
        if (!departmentCategories.includes(p.category)) return false
      }
      if (filterMode === 'new' && p.tag !== 'New') return false
      if (filterMode === 'sale' && !p.compareAt) return false
      if (searchTerm) {
        const haystack = `${p.name} ${getCategoryName(p.category)} ${p.description}`.toLowerCase()
        if (!haystack.includes(searchTerm)) return false
      }
      return true
    })
  }, [categorySlug, departmentSlug, filterMode, searchTerm])

  const sizeOptions = useMemo(() => {
    const set = new Set()
    baseProducts.forEach((p) => (p.sizes || []).forEach((s) => set.add(s)))
    return Array.from(set)
  }, [baseProducts])

  const colorOptions = useMemo(() => {
    const map = new Map()
    baseProducts.forEach((p) => (p.colors || []).forEach((c) => map.set(c.name, c.hex)))
    return Array.from(map, ([name, hex]) => ({ name, hex }))
  }, [baseProducts])

  const results = useMemo(() => {
    const activeRanges = PRICE_RANGES.filter((r) => ranges.includes(r.id))
    let list = baseProducts.filter((p) => {
      if (sizes.length && !(p.sizes || []).some((s) => sizes.includes(s))) return false
      if (colors.length && !(p.colors || []).some((c) => colors.includes(c.name))) return false
      if (activeRanges.length && !activeRanges.some((r) => p.price >= r.min && p.price <= r.max)) return false
      return true
    })

    list = [...list]
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'newest') list.sort((a, b) => (b.tag === 'New') - (a.tag === 'New'))
    return list
  }, [baseProducts, sizes, colors, ranges, sort])

  let heading = 'All Products'
  if (searchTerm) heading = `Results for "${searchTerm}"`
  else if (filterMode === 'new') heading = 'New Arrivals'
  else if (filterMode === 'sale') heading = 'Sale'
  else if (categorySlug !== 'all') heading = getCategoryName(categorySlug)
  else if (departmentSlug !== 'all') heading = getDepartmentBySlug(departmentSlug)?.name || 'All Products'

  const hasActiveFilters = sizes.length || colors.length || ranges.length

  function resetFilters() {
    setSizes([])
    setColors([])
    setRanges([])
  }

  const sidebar = (
    <div>
      <FilterGroup title="Departments">
        <Link
          href="/shop"
          className={`block text-[13px] ${categorySlug === 'all' && departmentSlug === 'all' && !filterMode ? 'font-semibold text-baer-dark' : 'text-baer-mid hover:text-baer-dark'}`}
        >
          All products
        </Link>
        {DEPARTMENTS.map((parent) => (
          <div key={parent.slug} className="py-1">
            <Link
              href={`/shop?department=${parent.slug}`}
              className={`block text-[13px] ${departmentSlug === parent.slug ? 'font-semibold text-baer-dark' : 'text-baer-mid hover:text-baer-dark'}`}
            >
              {parent.name}
            </Link>
            <div className="ml-3 mt-2 space-y-2 border-l border-baer-bdr pl-3">
              {CATEGORIES.filter((item) => item.department === parent.slug).map((item) => (
                <Link
                  key={item.slug}
                  href={`/shop?category=${item.slug}`}
                  className={`block text-[12px] leading-5 ${categorySlug === item.slug ? 'font-semibold text-baer-dark' : 'text-baer-mid hover:text-baer-dark'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </FilterGroup>

      {sizeOptions.length > 0 && (
        <FilterGroup title="Size">
          <div className="flex flex-wrap gap-2">
            {sizeOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSizes((cur) => toggle(cur, s))}
                aria-pressed={sizes.includes(s)}
                className={`min-w-[2.5rem] rounded-sm border px-2.5 py-1.5 text-xs ${
                  sizes.includes(s)
                    ? 'border-baer-dark bg-baer-dark text-white'
                    : 'border-baer-bdr bg-white text-baer-dark hover:border-baer-dark'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </FilterGroup>
      )}

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <Check
            key={r.id}
            checked={ranges.includes(r.id)}
            onChange={() => setRanges((cur) => toggle(cur, r.id))}
            label={r.label}
          />
        ))}
      </FilterGroup>

      {colorOptions.length > 0 && (
        <FilterGroup title="Colour">
          {colorOptions.map((c) => (
            <label key={c.name} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-baer-dark">
              <input
                type="checkbox"
                checked={colors.includes(c.name)}
                onChange={() => setColors((cur) => toggle(cur, c.name))}
                className="h-3.5 w-3.5 rounded-sm accent-[#1C1C1C]"
              />
              <span className="h-3.5 w-3.5 rounded-full border border-baer-bdr" style={{ background: c.hex }} />
              {c.name}
            </label>
          ))}
        </FilterGroup>
      )}

      {hasActiveFilters ? (
        <button type="button" onClick={resetFilters} className="mt-4 text-[13px] font-medium text-baer-gold underline">
          Clear filters
        </button>
      ) : null}
    </div>
  )

  return (
    <Layout title={heading} description={`Shop ${heading.toLowerCase()} at Baeruthys.`}>
      <div className="border-b border-baer-bdr bg-baer-bg">
        <div className="shell py-3.5 text-[13px] text-baer-mid">
          <Link href="/" className="hover:text-baer-dark">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-baer-dark">{heading}</span>
        </div>
      </div>

      <div className="bg-baer-surf">
        <div className="shell py-10">
          <h1 className="text-4xl font-bold text-baer-dark">{heading}</h1>
          <p className="mt-2 text-sm text-baer-mid">
            {results.length} {results.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>

      <div className="shell grid gap-10 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block" aria-label="Filters">
          <h2 className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-baer-mid">Filters</h2>
          {sidebar}
        </aside>

        <section>
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-baer-bdr pb-4">
            <button
              type="button"
              className="btn-outline !px-4 !py-2 text-[13px] lg:hidden"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
            >
              {filtersOpen ? 'Hide Filters' : 'Filters'}
            </button>
            <p className="hidden text-[13px] text-baer-mid sm:block">
              Showing {results.length} of {baseProducts.length}
            </p>
            <label className="ml-auto flex items-center gap-2 text-[13px] text-baer-dark">
              Sort by
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="field !w-auto !py-2">
                {SORT_OPTIONS.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filtersOpen && <div className="mb-8 rounded border border-baer-bdr bg-white p-5 lg:hidden">{sidebar}</div>}

          {results.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-baer-dark">No products found</p>
              <p className="mt-2 text-sm text-baer-mid">Try removing a filter or searching for something else.</p>
              <Link href="/shop" className="btn-dark mt-6">
                View all products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}
