export async function getProducts() {
    const res = await fetch("http://localhost:3000/webshop/products/")
    if(!res.ok) {
        throw {
            message: "Failed to fetch products."
        }
    }
    const data = await res.json()
    return data
}

export async function getSingleProduct(id) {
    const res = await fetch(`http://localhost:3000/webshop/products/${id}`)
    if(!res.ok) {
        throw {
            message: "Failed to fetch products."
        }
    }
    const data = await res.json()
    return data
}