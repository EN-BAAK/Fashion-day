import { createSlice, Slice } from "@reduxjs/toolkit"
import { SliderStateType } from "../../../misc/types"

const initialState: SliderStateType = {
  value: 0,
  length: 4
}

export const SliderSlice: Slice = createSlice({
  name: "slider",
  initialState: initialState,
  reducers: { // actions
    nextSlide(state, action) {
      state.value = action.payload > state.length ? 0 : action.payload
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length : action.payload
    },
    dotSlide() { }
  }
})

export const { nextSlide, prevSlide, dotSlide } = SliderSlice.actions;
export default SliderSlice.reducer