import React from 'react'
import Navbar from '../layout/Navbar'
import Slider from './slider/Slider'


const Main = (): React.JSX.Element => {
  return (
    <div className="main">
      <Navbar />
      <Slider />
    </div>
  )
}

export default Main
