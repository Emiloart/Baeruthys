import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CART_KEY = 'baeruthys_cart_v1'
const WISHLIST_KEY = 'baeruthys_wishlist_v1'

const CartContext = createContext(null)

function lineKey(productId, size, colorName) {
  return [productId, size || 'none', colorName || 'none'].join('|')
}

function readStorage(key) {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    // Storage can be unavailable (private mode). The cart still works in memory.
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [ready, setReady] = useState(false)

  // Load saved state once on the client.
  useEffect(() => {
    const savedCart = readStorage(CART_KEY)
    const savedWishlist = readStorage(WISHLIST_KEY)
    if (Array.isArray(savedCart)) setItems(savedCart)
    if (Array.isArray(savedWishlist)) setWishlist(savedWishlist)
    setReady(true)
  }, [])

  // Save after the initial load so we never overwrite saved data with an empty cart.
  useEffect(() => {
    if (ready) writeStorage(CART_KEY, items)
  }, [items, ready])

  useEffect(() => {
    if (ready) writeStorage(WISHLIST_KEY, wishlist)
  }, [wishlist, ready])

  const addItem = useCallback((product, options = {}) => {
    const { size = null, color = null, qty = 1 } = options
    const key = lineKey(product.id, size, color && color.name)
    setItems((current) => {
      const existing = current.find((line) => line.key === key)
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, qty: Math.min(line.qty + qty, 20) } : line
        )
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          unit: product.unit || 'Each',
          price: product.price,
          category: product.category,
          size,
          color,
          qty: Math.min(qty, 20),
        },
      ]
    })
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((line) => line.key !== key))
  }, [])

  const updateQty = useCallback((key, qty) => {
    const next = Math.max(1, Math.min(20, Number(qty) || 1))
    setItems((current) => current.map((line) => (line.key === key ? { ...line, qty: next } : line)))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const toggleWishlist = useCallback((productId) => {
    setWishlist((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]
    )
  }, [])

  const isWishlisted = useCallback((productId) => wishlist.includes(productId), [wishlist])

  const itemCount = useMemo(() => items.reduce((sum, line) => sum + line.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, line) => sum + line.price * line.qty, 0), [items])

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      wishlist,
      ready,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      toggleWishlist,
      isWishlisted,
    }),
    [items, itemCount, subtotal, wishlist, ready, addItem, removeItem, updateQty, clearCart, toggleWishlist, isWishlisted]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider')
  }
  return context
}
