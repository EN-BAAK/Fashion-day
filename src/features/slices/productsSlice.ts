import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ProductCardType, ProductsStateType } from "../../misc/types";
import { storeData } from "../../assets/data/dummyData";

const filteredDataFromSession = sessionStorage.getItem("filteredData");
const singleProductSession = sessionStorage.getItem("oneProduct");

const initialFilteredData = filteredDataFromSession
  ? JSON.parse(filteredDataFromSession)
  : storeData;
const initialSingleProduct = singleProductSession
  ? JSON.parse(singleProductSession)
  : storeData;

const initialState: ProductsStateType = {
  filteredProducts: initialFilteredData,
  singleProduct: initialSingleProduct,
  error: false,
};

export const productsSlice: Slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;

        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
      } catch (err) {
        console.log(err);
      }
    },
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;

        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        console.log(err);
      }
    },
    filterGender(state: ProductsStateType, action: PayloadAction<string>) {
      try {
        const gender = state.filteredProducts.filter(
          (product) => product.gender === action.payload
        );

        state.error = false;
        state.filteredProducts = gender;

        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    sortByPrice(state: ProductsStateType) {
      try {
        const price = state.filteredProducts.sort(
          (a: ProductCardType, b: ProductCardType) =>
            a.price > b.price ? -1 : 1
        );
        state.filteredProducts = price;

        const count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            const saveState = JSON.stringify(price);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        console.log(err);
      }
    },
    filterByColor(state: ProductsStateType, action: PayloadAction<string>) {
      try {
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;

        if (color.length === 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.filteredProducts = color;
          const saveState = JSON.stringify(color);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        console.log(err);
      }
    },
    filterBySize(state: ProductsStateType, action: PayloadAction<string>) {
      try {
        const size = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;

        if (size.length === 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.filteredProducts = size;
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default productsSlice.reducer;
export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productsSlice.actions;
