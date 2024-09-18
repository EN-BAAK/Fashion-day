import React, { Fragment } from 'react'
import { dotSlide, nextSlide, prevSlide } from '../../features/slices/SliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SliderStateType } from '../../misc/types'
import { sliderData } from "../../assets/data/dummyData"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const Slider = (): React.JSX.Element => {
  const slideIndex = useSelector((state: { slider: SliderStateType }) => state.slider.value)
  const dispatch = useDispatch()

  return (
    <div id='slider' className='position-relative pb-4'>
      <div>
        {sliderData.map((item, index) => (
          <div
            key={item.id}
            className={`product ${parseInt(item.id) === slideIndex && "active"}`}
          >
            {parseInt(item.id) === slideIndex && (
              <Fragment>
                <div>
                  <img
                    src={item.img}
                    alt='shoes'
                    className='w-100'
                  />
                </div>
                <div className='position-absolute text-holder text-center w-100'>
                  <p className='text-white fs-2 fw-bold'>{item.text}</p>
                </div>
              </Fragment>
            )}
          </div>
        ))}
      </div>

      <div className="bullets-holder flex-center-y position-absolute">
        {sliderData.map((dot, index) => (
          <div className="me-4" key={dot.id}>
            <button
              className={`rounded-circle p-2 cursor-pointer border border-1 border-white ${index === slideIndex ? "bg-success" : "bg-transparent"}`}
              onClick={() => dispatch(dotSlide(index))}
            />
          </div>
        ))}
      </div>

      <button
        className='slider-controller next position-absolute rounded-circle transition-300 border-0'
        onClick={() => dispatch(nextSlide(slideIndex + 1))}>
        <MdNavigateNext size={35} />
      </button>
      <button
        className='slider-controller prev position-absolute rounded-circle transition-300 border-0'
        onClick={() => dispatch(prevSlide(slideIndex - 1))}>
        <MdNavigateBefore size={35} />
      </button>
    </div >
  )
}

export default Slider
