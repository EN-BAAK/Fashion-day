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
    addToCart(state: CardStateType, action: PayloadAction<ProductCardType>) {
      const productId = action.payload

      try {
        const exit: CardStateType | undefined = state.cart.find(product =>
          product.id === productId.id &&
          product.size === productId.size &&
          product.color === productId.color
        ) ? state : undefined;

        if (exit) {
          exit.amount++;
          state.totalAmount++;
          exit.totalPrice += productId.price
          state.totalPrice += productId.price
        } else {
          state.amount = 1
          state.cart.push({
            ...productId
          })
          state.totalAmount++
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