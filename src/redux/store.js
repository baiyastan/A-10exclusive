import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/countSlice"
import productReducer from "./slice/productSlice"
import wishReducer from "./slice/wishSlice"
import cartReducer from "./slice/cartSlice"

const myStore = configureStore({
    reducer: {
        counter: countReducer,
        product: productReducer,
        wishlist: wishReducer,
        carts: cartReducer,
    }
})

export default myStore