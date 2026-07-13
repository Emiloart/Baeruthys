export default function ProductCard({product}){
  return (
    <article className="bg-white border border-baer-bdr rounded-md overflow-hidden shadow-sm">
      <div className="h-56 bg-baer-surf flex items-center justify-center text-baer-mid">[ Image ]</div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-baer-dark">{product.name}</h3>
        <p className="mt-2 text-sm text-baer-mid">{product.price}</p>
        <button className="mt-4 w-full bg-baer-dark text-white py-2 rounded text-sm">Add to Cart</button>
      </div>
    </article>
  )
}
