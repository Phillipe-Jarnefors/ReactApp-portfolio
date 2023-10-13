import { Link } from "react-router-dom"
import editproducts from "../../../../images/editproducts.jpg"
import handleorders from "../../../../images/handleorders.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function AdminHomeWS() {
  return (
    <div className=" flex flex-col gap-4">
      <Link to="../products" className="">
        <Icon
          icon="pajamas:go-back"
          color="#61dbfb"
          className="w-smallBtn h-smallBtn"
        />
      </Link>
      <Link to="./handle-products">
        <div className="w-full relative flex items-center justify-center">
          <img
            className="object-cover opacity-60 w-full h-48 rounded"
            src={editproducts}
            alt=""
          />
          <h2 className="text-primary text-xl absolute outline p-3 bg-abstract opacity-90 rounded">
            Edit Products
          </h2>
        </div>
      </Link>
      <Link to="./orders">
        <div className="w-full relative flex items-center justify-center">
          <img
            className="object-cover opacity-60 w-full h-48 rounded"
            src={handleorders}
            alt=""
          />
          <h2 className="text-primary text-xl absolute outline p-3 bg-abstract opacity-90 rounded">
            Handle Orders
          </h2>
        </div>
      </Link>
    </div>
  )
}
