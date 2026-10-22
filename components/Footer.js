import Link from 'next/link'

const SHOP_LINKS = [
  { label: 'Fresh Produce', href: '/shop?category=fresh-produce' },
  { label: 'Pantry & Staples', href: '/shop?category=pantry' },
  { label: 'Drinks', href: '/shop?category=drinks' },
  { label: 'Dairy & Eggs', href: '/shop?category=dairy-eggs' },
  { label: 'Home Care', href: '/shop?category=household' },
  { label: 'All Departments', href: '/shop' },
]

const HELP_LINKS = [
  { label: 'Shipping Information', href: '/policies/shipping' },
  { label: 'Returns and Refunds', href: '/policies/returns' },
  { label: 'Contact Baeruthys', href: '/policies/contact' },
]

const COMPANY_LINKS = [
  { label: 'Privacy Policy', href: '/policies/privacy' },
  { label: 'Terms and Conditions', href: '/policies/terms' },
]

function Column({ title, links }) {
  return (
    <div>
      <h3 className="font-sans text-[13px] font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-[13px] text-neutral-400 transition-colors hover:text-white">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-baer-ink text-neutral-400">
      <div className="shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-serif text-lg font-bold tracking-[0.12em] text-white">BAERUTHYS</Link>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">Your everyday store</p>
          <p className="mt-4 max-w-xs text-[13px] leading-6">Groceries, household essentials and everyday finds, brought together in one growing store.</p>
          <Link href="/shop" className="mt-5 inline-block text-[13px] font-semibold text-white transition-colors hover:text-baer-gold">Shop all departments →</Link>
        </div>
        <Column title="Departments" links={SHOP_LINKS} />
        <Column title="Customer Care" links={HELP_LINKS} />
        <Column title="Information" links={COMPANY_LINKS} />
      </div>
      <div className="border-t border-neutral-800">
        <div className="shell flex flex-col justify-between gap-2 py-5 text-xs text-neutral-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Baeruthys. All rights reserved.</span>
          <span>Prices displayed in Nigerian naira (NGN).</span>
        </div>
      </div>
    </footer>
  )
}
