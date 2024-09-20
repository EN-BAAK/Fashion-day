import React from 'react'
import Navbar from '../layout/Navbar'
import Slider from './slider/Slider'
import NavigateButtons from './navigateButtons/NavigateButtons'


const Main = (): React.JSX.Element => {
  return (
    <div className="main">
      <Navbar />
      <Slider />
      <NavigateButtons></NavigateButtons>
    </div>
  )
}

export default Main
