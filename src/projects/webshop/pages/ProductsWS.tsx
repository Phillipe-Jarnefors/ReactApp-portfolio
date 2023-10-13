import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getProducts } from "../../apiWS"
import { Product } from "../../../utils/Interfaces"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"
import IcecreamIcon from "@mui/icons-material/Icecream"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import LunchDiningIcon from "@mui/icons-material/LunchDining"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useContext, useLayoutEffect, useState } from "react"
import waves from "../../../images/waves.png"
import { CartContext } from "../../../utils/CartContext"

export function loader() {
  return getProducts()
}

export default function ProductsWS() {
  useLayoutEffect(() => {
    window.scroll(0, 0)
  })

  const { addToCart } = useContext(CartContext)

  const [value, setValue] = useState("all")
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFilter = searchParams.get("category")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault()
    setValue(newValue)
  }

  const fallbackImage = (event: React.SyntheticEvent) => {
    if (event.target) {
      ;(event.target as HTMLIFrameElement).src = waves
    }
  }

  const allProducts = useLoaderData() as Product[]
  const availableProducts = categoryFilter
    ? allProducts.filter(
        (product) =>
          product.isAvailable !== false &&
          product.isDeleted !== true &&
          product.category === categoryFilter
      )
    : allProducts

  const availableProductsElements = availableProducts.map((product) => (
    <div key={product._id} className="text-font flex flex-col gap-1 rounded">
      <div className="flex justify-between items-center">
        <h4 className="text-xl ">{product.name}</h4>
      </div>
      <div className="relative">
        <div>
          <button
            onClick={() => addToCart(product)}
            className="absolute right-2 top-4 flex gap-2 bg-abstract rounded-full p-1"
          >
            <AddCircleIcon
              className=""
              sx={{ height: "2rem", width: "2rem" }}
            />
            <p className="text-xl text-primary">{product.price} :-</p>
          </button>
          {/* <p className="text-xl text-background absolute bottom-0 px-4 rounded bg-primary">
          {product.price} :-
        </p> */}
        </div>
      </div>
      <Link
        to={product._id}
        state={{
          search: `?${searchParams.toString()}`,
          category: availableProducts,
        }}
        className="mb-10"
      >
        <img
          src={product.image}
          onError={fallbackImage}
          className="object-cover w-full h-48 rounded"
          alt=""
        />
      </Link>
    </div>
  ))
  return (
    <div className="mb-40 mt-4">
      <div className="mb-6">
        <BottomNavigation
          sx={{ bgcolor: "#001829" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            sx={{ color: "#fefefe" }}
            label="All"
            value="all"
            onClick={() => setSearchParams()}
            icon={<FastfoodIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "#fefefe" }}
            label="Hamburger"
            value="hamburger"
            onClick={() => setSearchParams({ category: "hamburger" })}
            icon={<LunchDiningIcon />}
          />

          <BottomNavigationAction
            sx={{ color: "#fefefe" }}
            label="Drinks"
            value="drink"
            onClick={() => setSearchParams({ category: "drink" })}
            icon={<LocalDrinkIcon />}
          />

          <BottomNavigationAction
            sx={{ color: "#fefefe" }}
            label="Dessert"
            value="dessert"
            onClick={() => setSearchParams({ category: "dessert" })}
            icon={<IcecreamIcon />}
          />
        </BottomNavigation>
      </div>
      {availableProductsElements}
    </div>
  )
}
