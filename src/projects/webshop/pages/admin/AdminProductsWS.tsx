import { Icon } from "@iconify/react/dist/iconify.js"
import { MenuItem, TextField } from "@mui/material"
import { useState } from "react"
import { AddProduct } from "../../../../utils/Interfaces"
import { Link, useLoaderData } from "react-router-dom"
import { addNewProduct, getProducts } from "../../../apiWS"
import { Product } from "../../../../utils/Interfaces"

export function loader() {
  return getProducts()
}

export default function AdminProductsWS() {
  const [toggleAdd, setToggleAdd] = useState(false)

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
      label: "Hamburger",
    },
    {
      value: "drink",
      label: "Drink",
    },
    {
      value: "dessert",
      label: "Dessert",
    },
  ]

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewProduct(formData)
  }

  const submitEditForm = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault()
    setFormData({
      id: "",
      productName: "",
      description: "",
      category: "",
      price: "",
      imageURL: "",
      isAvailable: true,
    })
    console.log("id ", id)
  }

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(formData)
  }

  const allProducts = useLoaderData() as Product[]
  const availableProducts = allProducts.filter(
    (product) => product.isAvailable !== false && product.isDeleted !== true
  )

  const availableProductsElements = availableProducts.map((product) => (
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
          name="productName"
          required
          value={formData.productName}
          label={product.name}
          variant="outlined"
          type="text"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          name="description"
          required
          value={formData.description}
          label={product.shortDesc}
          variant="outlined"
          type="text"
          onChange={handleChange}
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
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* <TextField
            id="outlined-select-currency"
            select
            label="Select"
            required
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            {paymentMethods.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}

        <TextField
          id="outlined-select-currency"
          name="price"
          required
          value={formData.price}
          label={product.price}
          type="number"
          onChange={handleChange}
        />
        <TextField
          id="outlined-select-currency"
          label={product.image}
          required
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
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
      <div className="flex justify-between items-center py-6 text-medium text-primary font-bold">
        <h3>Hamburger</h3>
        <h3>Drink</h3>
        <h3>Dessert</h3>
      </div>
      <article className="bg-[#fefefe] text-background grid gap-6 grid-cols-4 rounded-lg mb-10 border-4 border-abstract">
        <h3
          onClick={() => setToggleAdd(!toggleAdd)}
          className="text-center col-span-4 my-3 font-bold"
        >
          Add new product +
        </h3>
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
