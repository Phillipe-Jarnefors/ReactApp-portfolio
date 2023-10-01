import { useContext } from "react"
import { CartContext } from "../../../utils/CartContext"

export default function CheckoutWS() {
  const { totalPriceCart } = useContext(CartContext)
  const totalPrice = totalPriceCart()
  return (
    <section className="bg-abstract">
      <div className="py-2  text-xl text-font flex flex-col gap-2 items-center justify-center">
        <h2 className="">Checkout</h2>
        <p className="text-primary">{totalPrice} :-</p>
        <p className="text-xl">- - - - -</p>
      </div>
      <form></form>
      <div className="flex items-center justify-between">
        <p className="text-primary">Clear Cart</p>
        <p className="text-primary">Proceed</p>
      </div>
    </section>
  )
}
