import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import productReducer from './productSlice';
import cartReducer from './cartSlice'
import { saveCartToStorage } from './cartStorage';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
    }
})

store.subscribe(()=>{
    const {cart} = store.getState()
    saveCartToStorage(cart.items)
})