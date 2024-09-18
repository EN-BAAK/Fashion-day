import { createSlice, Slice } from "@reduxjs/toolkit"
import { SliderStateType } from "../../misc/types"
import { sliderData } from "../../assets/data/dummyData"

const initialState: SliderStateType = {
  value: 0,
  length: sliderData.length
}

export const SliderSlice: Slice = createSlice({
  name: "slider",
  initialState: initialState,
  reducers: { // actions
    nextSlide(state, action) {
      state.value = action.payload >= state.length ? 0 : action.payload
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload
    },
    dotSlide(state, action) {
      const slide = action.payload
      state.value = slide
    }
  }
})

export const { nextSlide, prevSlide, dotSlide } = SliderSlice.actions;
export default SliderSlice.reducer