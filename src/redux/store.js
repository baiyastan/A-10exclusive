import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/countSlice"
import productReducer from "./slice/productSlice"

const myStore = configureStore({
    reducer: {
        counter: countReducer,
        product: productReducer,
    }
})

export default myStore