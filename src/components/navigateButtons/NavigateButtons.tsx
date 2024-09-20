import React from 'react'
import { Button } from 'react-bootstrap'
import clothes from "../../assets/images/clothes-min.jpg"

const NavigateButtons = (): React.JSX.Element => {
  const buttons: string[] = ["Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"]

  return (
    <div id='navigate-buttons' className='py-5'>
      <div className="flex-center">
        {buttons.map((button, index) => (
          <div key={index} className='me-4'>
            <Button
              variant='outline-secondary'
              className='text-uppercase fw-medium transition-300'
            >{button}</Button>
          </div>
        ))}
      </div>
      <div className="offer p-2 w-50 mt-5 mx-auto rounded-pill">
        <h3 className='text-uppercase text-center m-0 fw-bold font-special lead'>Sales Up To 50%</h3>
      </div>
      <div className='flex-center py-4 img-holder'>
        <img
          className='w-75 rounded-3'
          src={clothes}
          alt="clothes" />
      </div>
    </div>
  )
}

export default NavigateButtons
