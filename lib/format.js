export function formatNaira(amount) {
  const value = Math.round(Number(amount) || 0)
  const sign = value < 0 ? '-' : ''
  const digits = Math.abs(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${sign}\u20A6${digits}`
}
