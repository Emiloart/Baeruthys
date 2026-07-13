import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

const PRODUCTS = [
  { name: 'Silk Wrap Dress', price: '₦21,000' },
  { name: 'Linen Blazer', price: '₦35,000' },
  { name: 'Crop Top Set', price: '₦12,500' },
  { name: 'Wide Leg Trousers', price: '₦18,000' },
  { name: 'Floral Midi Skirt', price: '₦14,500' },
  { name: 'Ribbed Knit Top', price: '₦8,000' },
  { name: 'Belted Trench', price: '₦42,000' },
  { name: 'Ruched Mini Dress', price: '₦16,500' },
  { name: 'Tailored Shorts', price: '₦9,800' },
  { name: 'Puff Sleeve Blouse', price: '₦11,000' },
  { name: 'Denim Jacket', price: '₦28,000' },
  { name: 'Asymmetric Top', price: '₦7,500' }
]

export default function Home(){
  return (
    <Layout>
      <section className="bg-baer-bg">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-baer-gold font-semibold">BAERUTHYS COLLECTION</div>
            <h1 className="mt-4 text-4xl font-bold text-baer-dark">Elevated Essentials for Everyday</h1>
            <p className="mt-6 text-baer-mid max-w-lg">Discover a curated selection of wardrobe staples designed with premium materials and contemporary silhouettes. Shop new arrivals and timeless pieces crafted for lasting style.</p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-baer-dark text-white px-6 py-3 rounded">Shop Women</button>
              <button className="bg-white border border-baer-bdr px-6 py-3 rounded">Explore Collection</button>
            </div>
          </div>
          <div className="h-96 bg-baer-surf rounded-md flex items-center justify-center text-baer-mid">[ Hero image ]</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-baer-dark">Women's Clothes</h2>
            <p className="text-sm text-baer-mid">124 products</p>
          </div>
          <div className="text-sm text-baer-mid">Sort by: Featured ▾</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
