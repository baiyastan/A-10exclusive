import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/countSlice"

const myStore = configureStore({
    reducer: {
        counter: countReducer,
    }
})

export default myStore