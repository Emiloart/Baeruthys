import { getCategoryName } from '../data/products'

// Renders the real photo when `product.image` is set, otherwise a tonal placeholder.
export default function ProductImage({ product, className = '', textSize = 'text-6xl' }) {
  if (product.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={product.image} alt={product.name} className={`h-full w-full object-cover ${className}`} />
    )
  }

  const swatch = product.colors && product.colors[0] ? product.colors[0].hex : '#EFE8DC'

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center bg-baer-surf ${className}`}
      role="img"
      aria-label={`${product.name} (image coming soon)`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: `linear-gradient(160deg, ${swatch} 0%, transparent 70%)` }}
      />
      <span className={`relative font-serif ${textSize} text-baer-gold/70`}>{product.name.charAt(0)}</span>
      <span className="relative mt-2 text-[10px] uppercase tracking-[0.2em] text-baer-mid">
        {getCategoryName(product.category)}
      </span>
    </div>
  )
}
