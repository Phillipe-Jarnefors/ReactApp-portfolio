export async function getProducts() {
  const res = await fetch(
    "https://portfolio-phillipe.onrender.com/webshop/products"
  )
  if (!res.ok) {
    throw {
      message: "Failed to fetch products.",
    }
  }
  if (!res) {
    console.log("laddar....")
    throw {
      message: "Loading...",
      status: "loading",
    }
  }
  const data = await res.json()
  return data
}

export async function getSingleProduct(id: string) {
  const res = await fetch(
    `https://portfolio-phillipe.onrender.com/webshop/products/${id}`
  )
  if (!res.ok) {
    throw {
      message: "Failed to fetch products.",
    }
  }
  const data = await res.json()
  return data
}

export async function addNewOrder(formData, cart, totalPrice) {
  try {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        totalPrice: totalPrice,
        cart: cart.map((cartItem: any) => ({
          productId: cartItem.productId,
          quantity: cartItem.quantity,
        })),
        isPaid: true,
        isDelivered: true,
        isDeleted: false,
      }),
    }

    console.log(settings.body)

    const res = await fetch(
      "https://portfolio-phillipe.onrender.com/webshop/orders/add",
      settings
    )
    const data = await res.json()
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function addNewProduct(formData) {
  try {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.productName,
        category: formData.category,
        brand: formData.category,
        price: formData.price,
        image: formData.imageURL,
        shortDesc: formData.description,
        description: formData.description,
        quantity: 1,
        isAvailable: true,
        isDeleted: false,
      }),
    }

    console.log(settings.body)

    const res = await fetch(
      "https://portfolio-phillipe.onrender.com/webshop/products/add",
      settings
    )
    const data = await res.json()
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
  }
}
