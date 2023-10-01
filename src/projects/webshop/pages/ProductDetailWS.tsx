import { getSingleProduct } from "../../apiWS"
import { Link, useLoaderData } from "react-router-dom"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Product } from "../../../utils/Interfaces"
import { useContext } from "react"
import { CartContext } from "../../../utils/CartContext"

export function loader({ params }) {
  return getSingleProduct(params.id)
}

export default function ProductDetailWS() {
  const product = useLoaderData() as Product
  const { addToCart } = useContext(CartContext)
  return (
    <div className="mt-10 ">
      <Link
        className="text-primary border-b-2  border-primary"
        to="../products"
      >
        Go back
      </Link>

      <div
        key={product._id}
        className="text-font flex flex-col gap-1 mt-2 rounded relative"
      >
        <h4 className="text-xl ">{product.name}</h4>

        <img
          src={product.image}
          className="object-cover w-full h-48 rounded-t"
          alt=""
        />
      </div>
      <div className="h-48 bg-abstract rounded-b mb-40 relative">
        <div className="flex items-center justify-end gap-2  p-2">
          <p className="text-xl  text-primary px-2 rounded">
            {product.price} :-
          </p>
          <button onClick={() => addToCart(product)}>
            <AddCircleIcon
              className=" rounded-full"
              sx={{ height: "2rem", width: "2rem", color: "#fefefe" }}
            />
          </button>
        </div>
        <p className="mt-4 text-center text-font">{product.shortDesc}</p>
        <p className="mt-4 text-center text-font">{product.description}</p>
      </div>
    </div>
  )
}
