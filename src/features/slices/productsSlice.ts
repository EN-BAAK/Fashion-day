import { createSlice, Slice } from "@reduxjs/toolkit";
import { ProductsStateType } from "../../misc/types";
import { storeData } from "../../assets/data/dummyData";

const filteredDataFromSession = sessionStorage.getItem("filteredData");
const singleProductSession = sessionStorage.getItem("oneProduct")

const initialFilteredData = filteredDataFromSession ? JSON.parse(filteredDataFromSession) : storeData;
const initialSingleProduct = singleProductSession ? JSON.parse(singleProductSession) : storeData

const initialState: ProductsStateType = {
  filteredProducts: initialFilteredData,
  singleProduct: initialSingleProduct
};

export const productsSlice: Slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter((product) => product.id === action.payload)
        state.singleProduct = oneProduct

        const saveState = JSON.stringify(oneProduct)
        sessionStorage.setItem("oneProduct", saveState)
      } catch (err) {
        console.log(err)
      }
    },
    filterProducts(state, action) {
      try {
        const filter = storeData.filter((product) => product.type === action.payload);
        state.filteredProducts = filter;

        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        console.log(err)
      }
    },
  }
});

export default productsSlice.reducer;
export const { filterProducts, singleProduct } = productsSlice.actions;