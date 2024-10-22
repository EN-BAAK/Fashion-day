import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/SliderSlice";
import productsReducer from "../features/slices/productsSlice";
import cartReducer from "../features/slices/cardSlice";
import authReducer from "../features/slices/authSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});
