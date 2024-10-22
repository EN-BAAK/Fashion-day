import React, { ChangeEvent, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { LoginType } from '../../misc/types';
import { useDispatch } from 'react-redux';
import { login } from "../../features/slices/authSlice"

const Login = (): React.JSX.Element => {
  const initialState: LoginType = {
    name: "",
    password: "",
    image: ""
  }

  const [values, setValues] = useState<LoginType>(initialState)
  const dispatch = useDispatch()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }

  return (
    <Container className='flex-center' id='login'>
      <Row className="justify-content-center mx-auto">
        <Col md={6} className="bg-light p-4 rounded shadow">
          <h2 className="bg-primary py-4 rounded-4 text-white text-center mb-4">Sign In</h2>

          <Form className='mt-5'>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                className='text-start'
                type="text"
                placeholder="Your name"
                name='name'
                value={values.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                className='text-start'
                type="password"
                name='password'
                placeholder="Password"
                value={values.password}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="img">
              <Form.Control
                className='text-start'
                type="text"
                name='image'
                placeholder="Image URL address"
                value={values.image}
                onChange={onChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={() => dispatch(login(values))}
              className="w-100 text-uppercase fw-medium">
              Sign In
            </Button>
          </Form>

          <p className='text-center mt-3 text-black-50 fs-6 font-special'>
            Image is optional
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login
