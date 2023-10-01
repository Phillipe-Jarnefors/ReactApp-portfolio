import { useContext, useState } from "react"
import { CartContext } from "../../../utils/CartContext"

import {
  Box,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material"
import { Link } from "react-router-dom"

const steps = ["Order", "Confirmation"]
const paymentMethods = [
  {
    value: "swish",
    label: "Swish",
  },
  {
    value: "card",
    label: "Card",
  },
]

export default function CheckoutWS() {
  const { cart, totalPriceCart, emptyCart } = useContext(CartContext)
  const [breadCrumbStepper, setBreadCrumbStepper] = useState(1)
  const totalPrice = totalPriceCart()

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    paymentMethod: "",
  })

  // const submitForm = (event) => {
  //   event.preventDefault()
  //   setFormData
  // }

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const cartProductsElement = cart.map((product) => (
    <ul className="flex flex-col gap-2 items-center mb-4">
      <li className="text-xl">{product.name}</li>
      <div className="flex gap-4 items-center justify-center text-xl mb-2">
        <img className="h-12 w-12 rounded-full" src={product.image} alt="" />
        <div className="flex gap-2">
          <p>{product.quantity}x</p>
          <p>{product.price} :-</p>
        </div>
      </div>
    </ul>
  ))

  return (
    <section className="bg-[#e2e2e2] rounded-lg ">
      <div className="pt-6  text-xl text-background flex flex-col gap-2 items-center justify-center">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={breadCrumbStepper} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {breadCrumbStepper === 2 ? (
          <section>
            <div className="text-center px-4">
              <p className="">Thank you!</p>
              <p className="text-medium pb-4">
                Your order has been placed and we'll serve you as soon it's
                ready.
              </p>
            </div>

            <div className="py-4 mb-2 text-medium text-font flex flex-col items-center bg-abstract">
              {formData.paymentMethod === "swish" ? (
                <div className="text-center">
                  <p>Swish 070 070 700 00</p>
                  <p>Paid {totalPrice} :-</p>
                </div>
              ) : (
                <div className="text-cenetr">
                  <p>Pay by card at checkout</p>
                  <p>Cost {totalPrice} :-</p>
                </div>
              )}

              <p>Bill Billson</p>
              <Link to="..">
                <button
                  onClick={() => {
                    emptyCart()
                  }}
                  className="text-font border-2 font-medium bg-[#757ce8]  border-primary p-2 px-6 mt-4 rounded"
                >
                  Continue
                </button>
              </Link>
            </div>
          </section>
        ) : (
          <p>Totalprice {totalPrice}:-</p>
        )}
      </div>

      {breadCrumbStepper === 1 && (
        <form
          // onSubmit={submitForm}
          className="text-primary flex flex-col px-10 mt-4 gap-2"
        >
          {" "}
          <TextField
            id="standard-basic"
            name="fullName"
            required
            value={formData.fullName}
            label="Name"
            variant="outlined"
            onChange={handleChange}
            type="text"
          />
          <TextField
            id="standard-basic"
            name="phone"
            required
            value={formData.phone}
            label="Phone"
            variant="outlined"
            onChange={handleChange}
            type="number"
          />
          <TextField
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
          </TextField>
          {formData.fullName && formData.phone && formData.paymentMethod ? (
            <button
              type="submit"
              onClick={() => {
                setBreadCrumbStepper(2)
              }}
              className="text-font border-2 font-medium bg-[#757ce8]  border-primary p-2 mb-6 rounded"
            >
              Place Order
            </button>
          ) : (
            <p className="text-background text-center pt-2 pb-4">
              Please fill all required fields.
            </p>
          )}
        </form>
      )}
      {breadCrumbStepper === 2 && <div>{cartProductsElement}</div>}
    </section>
  )
}
