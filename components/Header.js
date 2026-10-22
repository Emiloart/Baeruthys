import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CATEGORIES } from '../data/products'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  { label: 'New Arrivals', href: '/shop?filter=new' },
  ...CATEGORIES.filter((c) => ['clothes', 'shoes', 'bags', 'accessories'].includes(c.slug)).map((c) => ({
    label: c.name,
    href: `/shop?category=${c.slug}`,
  })),
  { label: 'Sale', href: '/shop?filter=sale' },
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
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <div className="flex items-center gap-4">
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
          <Link href="/" className="font-serif text-xl font-bold tracking-[0.12em] text-baer-dark">
            BAERUTHYS
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-baer-dark transition-colors hover:text-baer-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-[13px]">
          <button
            type="button"
            className="text-baer-mid transition-colors hover:text-baer-dark"
            onClick={() => setSearchOpen((open) => !open)}
            aria-expanded={searchOpen}
          >
            Search
          </button>
          <Link href="/wishlist" className="hidden text-baer-mid transition-colors hover:text-baer-dark sm:inline">
            Wishlist{wishCount > 0 ? ` (${wishCount})` : ''}
          </Link>
          <Link href="/cart" className="font-medium text-baer-dark transition-colors hover:text-baer-gold">
            Cart ({cartCount})
          </Link>
        </div>
      </div>

      {searchOpen && (
        <form onSubmit={submitSearch} className="border-t border-baer-bdr bg-white">
          <div className="shell flex items-center gap-3 py-3">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dresses, bags, earrings, watches"
              className="field"
              aria-label="Search products"
            />
            <button type="submit" className="btn-dark whitespace-nowrap">
              Search
            </button>
          </div>
        </form>
      )}

      {menuOpen && (
        <nav className="border-t border-baer-bdr bg-white lg:hidden" aria-label="Mobile">
          <div className="shell flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-baer-bdr/60 py-3 text-sm text-baer-dark last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-baer-dark"
            >
              Wishlist{wishCount > 0 ? ` (${wishCount})` : ''}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
