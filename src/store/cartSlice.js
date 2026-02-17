import { createSlice } from "@reduxjs/toolkit";
import { loadCartFromStorage } from "./cartStorage";

const initialState = {
    items: loadCartFromStorage()
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === product.id
            )

            if (existingItem) {
                (item) => item.id === product.id
            } else {
                state.items.push({ ...product, quantity: 1 })
            }
        },


        removeFromCart(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },

        increaseQty(state, action) {
            const item = state.items.find(
                (item) => item.id === action.payload
            );
            if (item) item.quantity += 1
        },


        decreaseQty(state, action) {
            const item = state.items.find(
                (item) => item.id === action.payload
            )
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        clearCart(state) {
            state.items = []
        }
    }
})

export const selectCartCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions
export default cartSlice.reducer