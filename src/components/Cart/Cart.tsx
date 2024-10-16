import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { CardStateType } from '../../misc/types'
import { removeFromCart } from '../../features/slices/cardSlice'

interface Props {
  openModal: boolean,
  onClose: () => void
}

const Cart = ({ openModal, onClose }: Props): React.JSX.Element => {
  const cart = useSelector((state: { cart: CardStateType }) => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      {cart.cart.length > 0
        ? <Modal
          size='lg'
          className='shopping-modal'
          show={openModal}
          centered
          onHide={onClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Shopping bag
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              {
                cart.cart.map((item, index) => (
                  <div key={index} className="row py-4">
                    <div className='col-7'>
                      <img
                        className='rounded-3'
                        src={item.img}
                        alt={item.name} />

                      <div>
                        <h4 className='text-black fs-6 font-special fw-bold pt-2'>{item.name}</h4>
                      </div>

                      <div>
                        <p className='text-black fs-6 pt-2 m-0'>{item.text}</p>
                      </div>
                    </div>

                    <div className="col-5">
                      <div>
                        <p className='text-black font-special pt-2 fs-sm m-0'>Selected size: {item.size}</p>
                      </div>

                      <div >
                        <p
                          className='text-black font-special pt-2 fs-sm m-0 flex-center-y'
                        >
                          Selected color: {item.color}
                          <span
                            className='rounded-circle p-2 ms-1 d-block'
                            style={{ backgroundColor: Array.isArray(item.color) ? item.color[0] : item.color || "#fff", width: 15, height: 15 }}
                          />
                        </p>
                      </div>

                      <div>
                        <p className='text-black font-special pt-2 fs-sm m-0'>
                          Amount:
                          <span className='ms-1'>{cart.amount}</span>
                        </p>
                      </div>

                      <div>
                        <p className='text-black font-special pt-2 fs-sm m-0'>
                          Single Item Price:
                          <span className='ms-1'>{item.price}</span>$
                        </p>
                      </div>

                      <div className="pt-4">
                        <Button
                          onClick={() => dispatch(removeFromCart(item))}
                          variant='danger'
                          className='text-uppercase px-4'>
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </Modal.Body>

          <Modal.Footer className='flex-center-y justify-content-start'>
            <p className='text-black font-special pt-2 fs-5 m-0'>
              Total price of all products
              <span className='ms-1'>{cart.totalPrice}</span>$
            </p>
          </Modal.Footer>
        </Modal>
        : <Modal
          show={openModal}
          centered
          onHide={onClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Shopping bag
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h1 className='text-black fs-2 font-special fw-bold pt-4'>Your bag is empty</h1>
            <p className='text-black-50 fs-5 m-0'>Add some products</p>
          </Modal.Body>
        </Modal>
      }
    </div>
  )
}

export default Cart
