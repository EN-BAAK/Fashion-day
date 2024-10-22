import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/slices/cardSlice'
import { Button, Card } from 'react-bootstrap'

interface Props {
  id: string,
  img: string,
  name: string,
  text: string,
  size: string[],
  price: number,
  color: string[],
  totalPrice: number
}

const ProductSectionItem = ({ id, img, name, text, size, price, color, totalPrice }: Props
): React.JSX.Element => {
  const dispatch = useDispatch()

  const defaultSize = size[0]
  const defaultColor = color[0]

  return (
    <Card className='px-4 product-section-item py-2 border-0 shadow'>
      <p className="text-uppercase font-special text-danger fs-3 fw-medium m-0 position-absolute float">Sale%</p>

      <Card.Header className='border-0 p-0'>
        <img className='rounded-3 w-100' src={img} alt={name} />
      </Card.Header>

      <Card.Body className='mb-2 text-center'>
        <h4>
          {name}
        </h4>

        <div className='text-black-50'>
          <p className='lead font-special m-0'>
            {text}
          </p>

          <div className="flex-center-y justify-content-between pt-4">
            <p className='text-danger'>
              Size lef: <span className='text-black-50'>{defaultSize}</span>
            </p>
            <p className='flex-center-y'>
              Color lef: {defaultColor}
              <span className='ms-2 p-2 rounded-circle d-block' style={{ backgroundColor: defaultColor }} />
            </p>
          </div>
        </div>
      </Card.Body>

      <Card.Footer className='d-flex justify-content-center gap- pt-2 border-0 bg-transparent'>
        <Button
          onClick={() => dispatch(addToCart(
            {
              id: id,
              img: img,
              text: text,
              amount: 1,
              price: price,
              totalPrice: totalPrice,
              name: name,
              size: defaultSize,
              color: defaultColor
            }
          ))}
          size='lg'
          variant='outline-secondary'>
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default ProductSectionItem
