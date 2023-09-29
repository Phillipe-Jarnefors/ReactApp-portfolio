import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import { getProducts } from "../../apiWS"
import { Product } from "../../../utils/Interfaces"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"
import IcecreamIcon from "@mui/icons-material/Icecream"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import LunchDiningIcon from "@mui/icons-material/LunchDining"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useState } from "react"
import waves from "../../../images/waves.png"

export function loader() {
  return getProducts()
}

export default function ProductsWS() {
  const [value, setValue] = useState("all")
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFilter = searchParams.get("category")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const fallbackImage = (event: React.SyntheticEvent) => {
    if (event.target) {
      ;(event.target as HTMLIFrameElement).src = waves
    }
  }

  const addProductToCart = (product: Product) => {
    const cart = localStorage.getItem("cart")
    if (!cart) {
      const cartProduct = {
        id: product._id,
        name: product.name,
        quantity: 1,
        price: product.price,
      }
      localStorage.setItem("cart", JSON.stringify(cartProduct))
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
      <h4 className="text-xl ">{product.name}</h4>
      <Link to={product._id} className="relative mb-10">
        <Link to=".">
          <button
            onClick={() => addProductToCart(product)}
            className="absolute right-4 top-4  bg-abstract rounded-full p-1"
          >
            <AddCircleIcon
              className=""
              sx={{ height: "2rem", width: "2rem" }}
            />
          </button>
        </Link>
        <img
          src={product.image}
          onError={fallbackImage}
          className="object-cover w-full h-48 rounded"
          alt=""
        />
        <p className="text-xl text-background absolute bottom-4 right-4 px-2 rounded bg-secondary">
          {product.price} :-
        </p>
      </Link>
    </div>
  ))
  return (
    <div className="mb-40">
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
