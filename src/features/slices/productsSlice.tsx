import { createSlice, Slice } from "@reduxjs/toolkit";
import { ProductsStateType } from "../../misc/types";
import { storeData } from "../../assets/data/dummyData";

const filteredDataFromSession = sessionStorage.getItem("filteredData");
const initialFilteredData = filteredDataFromSession ? JSON.parse(filteredDataFromSession) : storeData;

const initialState: ProductsStateType = {
  filteredProducts: initialFilteredData
};

export const productsSlice: Slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter((product) => product.type === action.payload);
        state.filteredProducts = filter;

        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        console.log(err)
      }
    }
  }
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;