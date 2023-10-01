export async function getProducts() {
    const res = await fetch("https://portfolio-phillipe.onrender.com/webshop/products")
    if(!res.ok) {
        throw {
            message: "Failed to fetch products."
        }
    }
    const data = await res.json()
    return data
}

export async function getSingleProduct(id: string) {
    const res = await fetch(`https://portfolio-phillipe.onrender.com/webshop/products/${id}`)
    if(!res.ok) {
        throw {
            message: "Failed to fetch products."
        }
    }
    const data = await res.json()
    return data
}