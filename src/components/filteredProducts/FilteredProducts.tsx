import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductsStateType } from '../../misc/types'
import ProductsCard from './ProductsCard'
import { Col, Row } from 'react-bootstrap'

const FilteredProducts = (): React.JSX.Element => {
  const products = useSelector((state: { products: ProductsStateType }) => state.products.filteredProducts)
  const { type } = useParams()

  return (
    <div id='filteredProducts' className='py-5 overflow-x-hidden'>
      <div>
        <div className='ps-md-2 ps-1'>
          <h1 className='font-special text-secondary'>{type}</h1>
        </div>

        <Row className='px-md-2 px-1 g-5'>
          {
            products
              .filter(product => product.type === type)
              .map((product, index) =>
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}>
                  <ProductsCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    color={product.color}
                    price={product.price}
                  />
                </Col>
              )
          }
        </Row>
      </div>
    </div>
  )
}

export default FilteredProducts
