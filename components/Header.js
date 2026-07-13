import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white border-b border-baer-bdr">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link href="/" className="text-xl font-bold text-baer-dark">BAERUTHYS</Link>
          <nav className="hidden md:flex space-x-8 text-sm text-baer-dark">
            <Link href="#">New Arrivals</Link>
            <Link href="#">Clothes</Link>
            <Link href="#">Shoes</Link>
            <Link href="#">Bags</Link>
            <Link href="#">Accessories</Link>
            <Link href="#" className="text-red-600">Sale</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <input aria-label="Search" placeholder="Search" className="hidden sm:block px-3 py-2 border rounded text-sm w-64" />
          <Link href="#" className="text-sm text-baer-mid">Wishlist</Link>
          <Link href="#" className="text-sm font-medium">Cart (0)</Link>
        </div>
      </div>
    </header>
  )
}
