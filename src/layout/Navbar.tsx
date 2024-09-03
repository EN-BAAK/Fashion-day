import React from 'react'
import Logo from "../assets/images/logo-min.png"
import { Button } from 'react-bootstrap'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = (): React.JSX.Element => {
  return (
    <div id='navbar'>
      <div className="bg-black p2 w-full">
        <h3
          className='text-white font-special text-2xl fw-bold lead text-center'>
          Welcome ALL
        </h3>
      </div>

      <div className='d-flex justify-content-around align-items-center'>
        <div className="logo">
          <img src={Logo} alt="store" />
        </div>

        <div className='d-flex align-items-center'>
          <Button
            variant='default'
            className="font-special fw-bold lead text-center me-4 border-0">
            Logout
          </Button>

          <div className="d-flex align-items-center me-4 cursor-pointer">
            <FaRegHeart fontSize={22} />

            <p className='text-capitalize m-0 font-special fw-400 ms-1'>Whish list</p>
          </div>

          <div className="d-flex align-items-center cursor-pointer">
            <MdOutlineShoppingBag fontSize={22} />
            <p className='text-capitalize m-0 font-special fw-400 ms-1'>Shopping bag</p>
          </div>
        </div>
      </div>

      <div className="bg-black p-4 w-full d-flex justify-content-around">
        <div className='text-capitalize text-center text-white m-0 font-special'>50% OFF</div>
        <div className='text-capitalize text-center text-white m-0 font-special'>Free shipping and returns</div>
        <div className='text-capitalize text-center text-white m-0 font-special'>Different payment methods</div>
      </div>
    </div>
  )
}

export default Navbar
