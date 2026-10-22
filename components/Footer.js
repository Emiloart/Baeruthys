import Link from 'next/link'

const SHOP_LINKS = [
  { label: 'New Arrivals', href: '/shop?filter=new' },
  { label: 'Clothes', href: '/shop?category=clothes' },
  { label: 'Shoes', href: '/shop?category=shoes' },
  { label: 'Bags', href: '/shop?category=bags' },
  { label: 'Accessories', href: '/shop?category=accessories' },
]

const HELP_LINKS = [
  { label: 'Shipping Info', href: '/policies/shipping' },
  { label: 'Returns and Refunds', href: '/policies/returns' },
  { label: 'Contact Us', href: '/policies/contact' },
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
            <Link href={link.href} className="text-[13px] text-neutral-400 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-baer-ink text-neutral-400">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="font-serif text-lg font-bold tracking-[0.12em] text-white">BAERUTHYS</div>
          <p className="mt-3 max-w-xs text-[13px] leading-6">Elegance in every detail.</p>
        </div>
        <Column title="Shop" links={SHOP_LINKS} />
        <Column title="Help" links={HELP_LINKS} />
        <Column title="Company" links={COMPANY_LINKS} />
      </div>
      <div className="border-t border-neutral-800">
        <div className="shell flex flex-col justify-between gap-2 py-5 text-xs text-neutral-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Baeruthys. All rights reserved.</span>
          <span>Secure payments. Encrypted checkout.</span>
        </div>
      </div>
    </footer>
  )
}
