import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { singleProduct } from '../../features/slices/productsSlice'
import { Link, useParams } from "react-router-dom"

interface Props {
  id: string,
  name: string,
  text: string,
  img: string,
  color: string[],
  price: number
}

const ProductsCard = ({
  id,
  name,
  text,
  img,
  price,
  color,
}: Props): React.JSX.Element => {
  const dispatch = useDispatch()
  const { type } = useParams()

  return (
    <Link
      to={`/filteredProducts/${type}/${id}`}
    >
      <Card
        className='overflow-hidden rounded-3 shadow'
        onClick={() => dispatch(singleProduct(id))}
      >
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
    </Link>
  )
}

export default ProductsCard
