export const loadCartFromStorage = () =>{
    if(typeof window === "undefined") return []

    try{
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    }catch{
        return []
    }
}


export const saveCartToStorage = (cartItems) =>{
    if(typeof window === "undefined") return

    try{
        localStorage.setItem("cart", JSON.stringify(cartItems))
    } catch{

    }
}