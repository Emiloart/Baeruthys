import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CATEGORIES, DEPARTMENTS } from '../data/products'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  ...DEPARTMENTS.slice(0, 4).map((department) => ({
    label: department.name,
    href: `/shop?department=${department.slug}`,
  })),
  { label: 'All departments', href: '/#departments' },
]

export default function Header() {
  const router = useRouter()
  const { itemCount, wishlist, ready } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const cartCount = ready ? itemCount : 0
  const wishCount = ready ? wishlist.length : 0

  function submitSearch(event) {
    event.preventDefault()
    const q = query.trim()
    setSearchOpen(false)
    setMenuOpen(false)
    router.push(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-baer-bdr bg-white/95 backdrop-blur">
      <div className="shell flex h-[72px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="-ml-2 p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block h-0.5 w-5 bg-baer-dark" />
            <span className="mt-1.5 block h-0.5 w-5 bg-baer-dark" />
            <span className="mt-1.5 block h-0.5 w-5 bg-baer-dark" />
          </button>
          <Link href="/" className="font-serif text-lg font-bold tracking-[0.1em] text-baer-dark sm:text-xl">
            BAERUTHYS
            <span className="mt-0.5 block font-sans text-[9px] font-medium tracking-[0.22em] text-baer-mid">EVERYDAY STORE</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main departments">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="whitespace-nowrap text-[12px] text-baer-dark transition-colors hover:text-baer-gold">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3 text-[12px] sm:gap-5 sm:text-[13px]">
          <button type="button" className="text-baer-mid transition-colors hover:text-baer-dark" onClick={() => setSearchOpen((open) => !open)} aria-expanded={searchOpen}>
            <span className="hidden sm:inline">Search</span>
            <span className="sm:hidden" aria-label="Search">⌕</span>
          </button>
          <Link href="/wishlist" className="hidden text-baer-mid transition-colors hover:text-baer-dark md:inline">
            Saved{wishCount > 0 ? ` (${wishCount})` : ''}
          </Link>
          <Link href="/cart" className="font-semibold text-baer-dark transition-colors hover:text-baer-gold">
            Basket ({cartCount})
          </Link>
        </div>
      </div>

      {searchOpen && (
        <form onSubmit={submitSearch} className="border-t border-baer-bdr bg-white">
          <div className="shell flex items-center gap-3 py-3">
            <input autoFocus type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search groceries, drinks, home care and more" className="field" aria-label="Search products" />
            <button type="submit" className="btn-dark whitespace-nowrap">Search store</button>
          </div>
        </form>
      )}

      {menuOpen && (
        <nav className="border-t border-baer-bdr bg-white xl:hidden" aria-label="Mobile departments">
          <div className="shell grid gap-x-8 py-3 sm:grid-cols-2">
            {DEPARTMENTS.map((department) => (
              <div key={department.slug} className="border-b border-baer-bdr/70 py-3">
                <Link href={`/shop?department=${department.slug}`} onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-baer-dark">
                  {department.name}
                </Link>
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                  {CATEGORIES.filter((category) => category.department === department.slug).map((category) => (
                    <Link key={category.slug} href={`/shop?category=${category.slug}`} onClick={() => setMenuOpen(false)} className="py-1 text-xs leading-5 text-baer-mid hover:text-baer-dark">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-semibold text-baer-dark">Shop everything →</Link>
            <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="py-3 text-sm text-baer-dark">Saved items{wishCount > 0 ? ` (${wishCount})` : ''}</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
