import { ReactNode, createContext } from "react"

export const CartContext = createContext({
  cart: [],
})

export const CartProvider = ({ children }: ReactNode) => {
  co
  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}
