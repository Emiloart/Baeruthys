import Link from 'next/link'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Wishlist() {
  const { wishlist, ready } = useCart()
  const saved = PRODUCTS.filter((p) => wishlist.includes(p.id))

  return (
    <Layout title="Wishlist">
      <div className="border-b border-baer-bdr bg-baer-bg">
        <div className="shell py-8">
          <h1 className="text-4xl font-bold text-baer-dark">Your Wishlist</h1>
          {ready && saved.length > 0 ? (
            <p className="mt-2 text-sm text-baer-mid">
              {saved.length} saved {saved.length === 1 ? 'item' : 'items'}
            </p>
          ) : null}
        </div>
      </div>

      <div className="shell py-10">
        {!ready ? (
          <p className="py-16 text-center text-sm text-baer-mid">Loading...</p>
        ) : saved.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-serif text-3xl text-baer-dark">Nothing saved yet</p>
            <p className="mt-3 text-sm text-baer-mid">Tap the heart on any product to save it here.</p>
            <Link href="/shop" className="btn-dark mt-8">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {saved.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
