import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../features/slices/SliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SliderStateType } from '../../misc/types'

const Slider = (): React.JSX.Element => {
  const slideIndex = useSelector((state: { slider: SliderStateType }) => state.slider.value)
  const dispatch = useDispatch()

  return (
    <div className='position-relative pb-4'>
      <div>

      </div>

      <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>Next</button>
      <button onClick={() => dispatch(prevSlide(slideIndex - 1))}>Prev</button>
    </div>
  )
}

export default Slider
