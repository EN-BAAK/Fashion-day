import React from 'react'
import Navbar from '../layout/Navbar'
import Slider from './slider/Slider'
import NavigateButtons from './navigateButtons/NavigateButtons'
import ProductSection from './ProductSection/ProductSection'
import Footer from './Footer/Footer'


const Main = (): React.JSX.Element => {
  return (
    <div className="main">
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Footer />
    </div>
  )
}

export default Main
