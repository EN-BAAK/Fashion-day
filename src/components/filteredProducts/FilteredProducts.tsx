import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductsStateType } from '../../misc/types'
import ProductsCard from './ProductsCard'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Error from '../Error/Error'
import { filterGender, filterByColor, filterBySize, filterProducts, sortByPrice } from '../../features/slices/productsSlice'

const FilteredProducts = (): React.JSX.Element => {
  const products = useSelector((state: { products: ProductsStateType }) => state.products.filteredProducts)
  const error = useSelector((state: { products: ProductsStateType }) => state.products.error)
  const dispatch = useDispatch()
  const { type } = useParams()

  const genderButtons = ["male", "female"]
  const colorButtons = ["red", "green", "purple", "yellow", 'orange', "blue", "black", "brown"]
  const sizeButtons = ["S", "M", "L", "XL"]


  return (
    <div id='filteredProducts' className='py-5 overflow-x-hidden'>
      <div>
        <div className='ps-md-2 ps-1'>
          <h1 className='font-special text-secondary'>{type}</h1>
        </div>

        <div className="flex-center-y justify-content-between py-5">
          <div className="flex-center-y">
            {genderButtons.map((item, index) => (
              <div key={index}>
                <Button
                  onClick={() => dispatch(filterGender(item))}
                  variant='outline-secondary'
                  size='lg'
                  className='text-nowrap mx-2 px-4 py-1 fw-medium'
                >
                  {item}
                </Button>
              </div>
            ))}

            <Button
              onClick={() => dispatch(sortByPrice(products))}
              variant='outline-secondary'
              size='lg'
              className='text-nowrap mx-2 px-4 py-1 fw-medium'
            >
              High Price</Button>

            <Form.Select className='mx-2 text-nowrap fw-medium' aria-label="Color Select">
              <option>Select A Color</option>
              {colorButtons.map((item, index) => (
                <option
                  onClick={() => dispatch(filterByColor(item))}
                  style={{ color: item }}
                  key={index}
                  value={item}>{item}</option>
              ))}
            </Form.Select>

            <Form.Select
              disabled={type === "Bags" || type === "Shoes"}
              aria-label="Size Select"
              className='mx-2 text-nowrap fw-medium'
            >
              <option>Select A Size</option>
              {sizeButtons.map((item, index) => (
                <option
                  onClick={() => dispatch(filterBySize(item))}
                  key={index}
                  value={item}
                >{item}</option>
              ))}
            </Form.Select>

            <div className='pe-5'>
              <Button
                onClick={() => dispatch(filterProducts(type))}
                variant='outline-secondary'
                className='me-2 text-nowrap px-4 py-1 fw-medium'
                size='lg'>
                Clear Filter
              </Button>
            </div>
          </div>
        </div>

        {error ? <Error /> : <Row className='px-md-2 px-1 g-5'>
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
        </Row>}
      </div>
    </div>
  )
}

export default FilteredProducts
