import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"
import { CardStateType, ProductCardType } from "../../misc/types"

const initialState: CardStateType = {
  cart: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0
}

export const CartSlice: Slice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: { // actions
    addToCart(state, action: PayloadAction<ProductCardType>) {
      const productId = action.payload

      try {
        const exit = state.cart.find(product
          => product.id === productId &&
          product.size === productId.size &&
          product.color === productId.color
        )

        if (exit) {
          exit.amount++;
          state.totalAmount++;
          exit.totalPrice += productId.price
          state.totalPrice += productId.price
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
})

export default CartSlice.reducer
export const { addToCart } = CartSlice.actions