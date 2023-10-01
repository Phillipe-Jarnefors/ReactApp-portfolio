import { ReactNode, createContext, useEffect, useState } from "react"
import { Product } from "./Interfaces"

interface Props {
  children: ReactNode
}

interface CartProduct extends Product {
  quantity: number
}

interface CartContextValues {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  emptyCart: () => void
  totalPriceCart: () => number
}

export const CartContext = createContext<CartContextValues>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  totalPriceCart: () => 0,
})

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(savedCart)
  }, [])

  const addToCart = (product: Product) => {
    const findProduct = cart.find(
      (cartProduct) => cartProduct._id === product._id
    )
    if (findProduct) {
      const updatedCart = cart.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 }
        } else {
          return cartProduct
        }
      })
      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    } else {
      const updatedCart = [{ ...product, quantity: 1 }, ...cart]
      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    }
  }

  const removeFromCart = (productId: string) => {
    const index = cart.findIndex((product) => product._id === productId)

    if (index !== -1) {
      const updatedCart = [...cart]
      updatedCart[index].quantity -= 1

      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1)
      }
      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    }
  }

  const emptyCart = () => {
    setCart([])
  }

  const totalPriceCart = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, emptyCart, totalPriceCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
