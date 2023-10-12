import { Icon } from "@iconify/react/dist/iconify.js"
import { MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { addNewProduct, getProducts, updateProduct } from "../../../apiWS"
import { Product } from "../../../../utils/Interfaces"
import AddCircleIcon from "@mui/icons-material/AddCircle"

export function loader() {
  return getProducts()
}

export default function AdminProductsWS() {
  const allProducts = useLoaderData() as Product[]
  const availableProducts = allProducts.filter(
    (product) => product.isAvailable !== false && product.isDeleted !== true
  )

  const [data, setData] = useState(allProducts)
  const [currentProductId, setCurrentProductId] = useState("")
  const [toggleAdd, setToggleAdd] = useState(false)

  // console.log(currentProductId)

  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    description: "",
    category: "",
    price: "",
    imageURL: "",
    isAvailable: true,
  })

  const categories = [
    {
      value: "hamburger",
      label: "hamburger",
    },
    {
      value: "drink",
      label: "drink",
    },
    {
      value: "dessert",
      label: "dessert",
    },
  ]

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewProduct(formData)
  }

  const submitEditForm = (
    e: React.FormEvent<HTMLFormElement>,
    productId: string
  ) => {
    e.preventDefault()

    const selectedProduct = data.find((product) => product._id === productId)

    if (selectedProduct) {
      updateProduct(selectedProduct)
    }
  }

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(formData)
  }

  const handleEditChange = (
    e: { target: { name: string; value: string } },
    productId: string
  ) => {
    const { name, value } = e.target
    setData((prevData) => {
      return prevData.map((product) => {
        if (product._id === productId) {
          return { ...product, [name]: value }
        }
        return product
      })
    })
    setCurrentProductId(productId)
  }

  const availableProductsElements = data.map((product) => (
    <div key={product._id} className="bg-[#fefefe] grid gap-6 grid-cols-4 py-6">
      <div className="col-span-1 border-dashed border-2 border-abstract rounded mx-6 h-20 w-full">
        <img className="h-full w-full" src={product.image} alt="" />
      </div>
      <form
        onSubmit={(e) => submitEditForm(e, product._id)}
        className="text-primary flex flex-col col-span-3 px-6 gap-2"
        name={product._id}
      >
        <TextField
          id="standard-basic"
          name="name"
          required
          value={product.name}
          label={product.name}
          variant="outlined"
          type="text"
          onChange={(e) => handleEditChange(e, product._id)}
        />
        <TextField
          id="standard-basic"
          name="description"
          required
          value={product.description}
          label={product.shortDesc}
          variant="outlined"
          type="text"
          onChange={(e) => handleEditChange(e, product._id)}
        />
        <TextField
          id="standard-basic"
          select
          name="category"
          required
          // value={product.description}
          label={product.category}
          variant="outlined"
          type="text"
          onChange={(e) => handleEditChange(e, product._id)}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          name="price"
          required
          value={product.price}
          label={product.price}
          type="number"
          onChange={(e) => handleEditChange(e, product._id)}
        />
        <TextField
          id="outlined-select-currency"
          label={product.image}
          required
          name="imageURL"
          value={product.image}
          onChange={(e) => handleEditChange(e, product._id)}
        />
        <button
          type="submit"
          className="text-font border-2 font-medium bg-[#757ce8]  border-primary p-2  rounded"
        >
          Save
        </button>
        <button className="text-font border-2 font-medium bg-secondary  border-primary p-2 mb-6 rounded">
          Delete
        </button>
      </form>
    </div>
  ))

  return (
    <div>
      <div className="flex justify-between items-center pt-4">
        <Link to=".." className="">
          <Icon
            icon="pajamas:go-back"
            color="#61dbfb"
            className="w-icon h-icon"
          />
        </Link>
        <h2 className="text-xl text-primary">Handle Products</h2>
        <div></div>
      </div>

      <article className="bg-[#fefefe] text-background grid gap-6 my-6 grid-cols-4 rounded-lg mb-10 border-4 border-abstract">
        <div className="flex items-center justify-center col-span-4 gap-2">
          <h3
            onClick={() => setToggleAdd(!toggleAdd)}
            className="text-center col-span-4 my-3 font-bold"
          >
            Add new product
          </h3>
          <AddCircleIcon
            className=" rounded-full"
            sx={{ height: "100%", width: "2rem", color: "#" }}
          />
        </div>
        {toggleAdd && (
          <>
            {" "}
            <div className="col-span-1 border-dashed border-2 border-abstract rounded mx-6 h-20 w-full">
              <img className="h-full w-full" src={formData.imageURL} alt="" />
            </div>
            <form
              onSubmit={submitForm}
              className="text-primary flex flex-col col-span-3 px-6 gap-2 "
            >
              <TextField
                id="standard-basic"
                name="productName"
                required
                value={formData.productName}
                label="Productname"
                variant="outlined"
                type="text"
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                name="description"
                required
                value={formData.description}
                label="Description"
                variant="outlined"
                type="text"
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                select
                name="category"
                required
                value={formData.category}
                label="Category"
                variant="outlined"
                type="text"
                onChange={handleChange}
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency"
                name="price"
                required
                value={formData.price}
                label="Price"
                type="number"
                onChange={handleChange}
              ></TextField>
              <TextField
                id="outlined-select-currency"
                label="Image URL"
                required
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
              ></TextField>
              <button
                type="submit"
                className="text-font border-2 font-medium bg-[#757ce8]  border-primary p-2 mb-6 rounded"
              >
                Save
              </button>
            </form>
          </>
        )}
      </article>
      <div className="rounded-lg">{availableProductsElements}</div>
    </div>
  )
}
