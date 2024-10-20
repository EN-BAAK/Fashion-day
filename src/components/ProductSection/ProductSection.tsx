import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'
import { Col, Row } from 'react-bootstrap'


const ProductSection = (): React.JSX.Element => {
  return (
    <div>
      <div className="bg-black p-2 w-50 mx-auto rounded-pill">
        <h2 className="text-center m-0 text-danger lead font-special fw-bold">SUMMER T-shirt SALE 30%</h2>
      </div>

      <Row className='px-5 mx-5 my-4 g-3'>
        {storeData.slice(0, 6).map((product, index) => (
          <Col lg={4} sm={6} xs={12} key={index}>
            <ProductSectionItem
              id={product.id}
              name={product.name}
              img={product.img}
              text={product.text}
              price={product.price}
              color={product.color}
              totalPrice={product.price}
              size={product.size ? product.size : []}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductSection
