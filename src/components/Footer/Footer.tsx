import React from 'react'
import logo from "../../assets/images/logo-min.png"

const Footer = (): React.JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <footer className='px-5'>
      <div className="flex-center-y justify-content-around pt-4 border-black-50 border border-0 border-top">
        <div>
          <img src={logo} alt='logo' />
        </div>

        <div>
          <p className="text-black text-6 font-special">
            Copyright {year} page by Marko Web Dev
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
