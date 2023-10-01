import { Link } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import { Badge } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../utils/CartContext"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function HeaderWS() {
  const { cart, emptyCart, addToCart, removeFromCart, totalPriceCart } =
    useContext(CartContext)
  const [displayCart, setDisplayedCart] = useState(true)
  const totalPrice = totalPriceCart()

  const cartLength = cart.reduce(
    (total, product) => total + product.quantity,
    0
  )

  useEffect(() => {
    setDisplayedCart(false)
  }, [cartLength <= 0])

  const cartProductsElement = cart.map((product) => (
    <ul key={product._id} className="flex flex-col gap-2 items-center mb-4">
      <li className="text-xl">{product.name}</li>
      <div className="flex gap-4 items-center justify-center text-xl">
        <button onClick={() => removeFromCart(product._id)}>
          <p className="">-</p>
        </button>
        <img className="h-12 w-12 rounded-full" src={product.image} alt="" />
        <button onClick={() => addToCart(product)}>
          <p className="">+</p>
        </button>
      </div>
      <li className="text-standard">
        <div className="flex gap-2">
          <p>{product.quantity}x</p>
          <p>{product.price} :-</p>
        </div>
      </li>
    </ul>
  ))

  return (
    <div className="">
      <div className="border-t-2 border-abstract text-xl flex gap-4 items-center w-full  py-6 mt-8 xl:px-12 z-10 top-12 left-0 bg-background">
        <h1 className="text-primary hover:cursor-pointer mr-auto">
          <Link to="./products">Burg!</Link>
        </h1>
        <Link to="admin">
          <AdminPanelSettingsIcon className="text-primary" />
        </Link>
        {cartLength ? (
          <Badge badgeContent={cartLength} color="primary">
            <button onClick={() => setDisplayedCart(!displayCart)}>
              <ShoppingCartIcon className="text-primary mb-1" />
            </button>
          </Badge>
        ) : (
          ""
        )}
      </div>

      <header
        className={` flex justify-between fixed  px-6 py-6 xl:px-12 z-20 transition duration-1000`}
      >
        <nav className="flex sm:gap-6 items-center">
          <section
            className={`fixed right-0 top-0 flex flex-col  text-primary backdrop-blur-xl backdrop-brightness-50  h-[100%] transform transition-transform duration-100 ${
              displayCart ? "translate-x-0 w-[70%]" : "translate-x-64"
            }`}
          >
            <div className="flex items-center justify-between">
              <button
                onClick={() => setDisplayedCart(!displayCart)}
                className="mx-5 my-5 "
              >
                <Icon
                  className="h-8 w-8 transition hover:translate-x-[-5px]"
                  icon="maki:cross"
                />
              </button>
              <p className="">Total: {totalPrice} :-</p>
              <Link to="./checkout">
                <button
                  onClick={() => setDisplayedCart(!displayCart)}
                  className="mx-5 my-5 "
                >
                  <Icon
                    className="h-8 w-8 transition hover:translate-x-[-5px]"
                    icon="material-symbols:shopping-cart-checkout-rounded"
                  />
                </button>
              </Link>
            </div>
            {cartProductsElement}
            <div className="flex justify-center fixed bottom-4 w-full">
              <button
                onClick={() => {
                  emptyCart()
                  setDisplayedCart(false)
                }}
              >
                <p className="border-2 border-secondary text-secondary rounded px-4">
                  Empty Cart
                </p>
              </button>
            </div>
          </section>
        </nav>
      </header>
    </div>
  )
}
