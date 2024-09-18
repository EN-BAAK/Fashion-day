import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/SliderSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
  },
});
