import React from 'react'
import { Card } from 'react-bootstrap'

interface Props {
  name: string,
  text: string,
  img: string,
  color: string[],
  price: number
}

const ProductsCard = ({
  name,
  text,
  img,
  price,
  color,
}: Props): React.JSX.Element => {


  return (
    <Card className='overflow-hidden rounded-3 shadow'>
      <Card.Header color='blue' className='position-relative px-2 border-0 bg-white'>
        <img
          src={img}
          className='w-100 rounded-3 bg-info'
          alt='img-blur-shadow' />
      </Card.Header>

      <Card.Body className='text-center'>
        <h5 className="mb-2">{name}</h5>
        <p className='text-black-50'>{text}</p>
      </Card.Body>

      <Card.Footer className='flex-center-y'>
        <p className='m-0 text-black-50 fw-medium'>{price}$</p>
        <div className="flex-center gap-1 ms-auto">
          {
            color.map((colorItem, index) => {
              return <div
                className='ball rounded-circle'
                style={{ backgroundColor: colorItem }}
                key={index} />

            })
          }
        </div>
      </Card.Footer>
    </Card>
  )
}

export default ProductsCard
