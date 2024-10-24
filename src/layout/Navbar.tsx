import React, { useState } from 'react'
import Logo from "../assets/images/logo-min.png"
import { Button } from 'react-bootstrap'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Cart from '../components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { AuthStateType, CardStateType } from '../misc/types';
import { logout } from '../features/slices/authSlice';

const Navbar = (): React.JSX.Element => {
  const totalAmount = useSelector((state: { cart: CardStateType }) => state.cart.totalAmount)
  const user = useSelector((state: { user: AuthStateType }) => state.user.user)
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

            <p className='text-capitalize m-0 font-special fw-medium ms-3'>Whish list</p>
          </div>

          <div className="d-flex align-items-center cursor-pointer" onClick={handleOpen}>
            {totalAmount > 0
              ? <span className='rounded-circle bg-secondary px-2 font-special text-6 me-1'>{totalAmount}</span>
              : <MdOutlineShoppingBag fontSize={22} />
            }
            <p className='text-capitalize m-0 font-special fw-medium ms-3'>Shopping bag</p>
          </div>

          <div className="flex-center-y cursor-pointer ps-4">
            {user.image
              && <img
                src={user.image}
                alt='avatar'
                className='avatar me-2 rounded-circle'
              />
            }

            <div onClick={() => dispatch(logout(user))}>
              <p
                title="Sign out"
                className='font-special m-0 fs-6 fw-medium'>
                Hi {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
              </p>
            </div>
          </div>
          <Cart openModal={open} onClose={handleClose} />
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
