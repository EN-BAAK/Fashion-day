import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductsStateType } from '../../misc/types'
import { Button, Form } from 'react-bootstrap'
import { addToCart } from '../../features/slices/cardSlice'
import { useDispatch } from 'react-redux'

const SingleProduct = (): React.JSX.Element => {
  const product = useSelector((state: { products: ProductsStateType }) => state.products.singleProduct)
  const dispatch = useDispatch()

  const productSize = product[0].size ? product[0].size[0] : ""
  const productColor = product[0].color[0]
  const { id } = useParams()

  const [size, setSize] = useState<string>(productSize)
  const [color, setColor] = useState<string>(productColor)

  return (
    <div id='single-product'>
      {product.filter(product => product.id === id).map((item, index) => (
        <div
          key={index}
          className='flex-center py-5'
        >
          <div className='img-holder'>
            <img
              src={item.img}
              alt={item.name}
              className='rounded-5'
            />
          </div>

          <div className="details px-lg-5 px-2">
            <div>
              <h5 className='fs-1 font-special fw-bold'>{item.name}</h5>
              <p className="text-orange m-0 fs-3 font-special fw-bold pb-4">15% OFF</p>
              <p className="text-black-50 m-0 fs-3 font-special fw-bold pb-4">{item.text}</p>

              <div className="pb-4">
                {item.size && <Form.Group>
                  <Form.Label
                    htmlFor="size"
                  >Pick A Size</Form.Label>
                  <Form.Select
                    name="size"
                    id="size"
                    value={size}
                    onChange={(e => setSize(e.target.value))}
                  >
                    {item.size.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>}
              </div>

              <div className="pb-4">
                {item.color && <Form.Group>
                  <Form.Label
                    htmlFor="color"
                  >Pick A Color</Form.Label>
                  <Form.Select
                    name="color"
                    id="color"
                    value={color}
                    onChange={(e => setColor(e.target.value))}
                  >
                    {item.color.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>}
              </div>

              <Button size='lg'
                variant='outline-secondary'
                className='fw-medium text-uppercase fs-6'
                onClick={() => dispatch(addToCart({
                  id: item.id,
                  price: item.price,
                  amount: 1,
                  totalPrice: item.price,
                  name: item.name,
                  color: color
                }))}
              >
                Add to card
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleProduct
