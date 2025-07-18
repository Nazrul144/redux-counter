import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counters/counterSlice"
const store = configureStore({
   reducer: {
    counters: counterReducer
   }
})

export default store;