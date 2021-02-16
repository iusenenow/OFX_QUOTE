import React from 'react'
import { useState, useContext } from 'react'
import { FormContext } from './FormContext'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import { standardData } from './Currency';

const CurrencyForm = props => {
  const [data, setData] = useState({
    amount: "",
    email: "",
    firstname: "",
    fromCurrency: "AUD",
    lastname: "",
    mobile: "",
    toCurrency: "AUD"
  })

  const [currencyData, setCurrencyData] = useContext(FormContext)

  const handleChange = e => {
    setData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCurrencyData(data)
    props.history.push('/result')
  }

  return (
    <Form onSubmit={handleSubmit} className="currencyForm">
      <Row>
        <Col md={6}>
          <Form.Group controlId="formGridFirstName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              required
              type='text'
              name='firstname'
              placeholder='First Name'
              onChange={handleChange}
              value={data.firstname}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId='formGridLastName'>
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type='text'
              required
              placeholder='Last Name'
              name='lastname'
              onChange={handleChange}
              value={data.lastname}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={data.email}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Telephone/Mobile</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroupPrepend'>+ 61 </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type='number'
              placeholder=''
              aria-describedby='inputGroupPrepend'
              name='mobile'
              onChange={handleChange}
              value={data.mobile}
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId='formGridFromCurrency'>
            <Form.Label>From Currency *</Form.Label>
            <Form.Control
              as='select'
              name='fromCurrency'
              onChange={handleChange}
              value={data.fromCurrency}
              required
            >
              {standardData.map((currency, index) => (
                <option key={index} value={currency.currency}>
                  {currency.currencyName} [{currency.currency}]
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId='formGridToCurrency'>
            <Form.Label>To Currency *</Form.Label>
            <Form.Control
              as='select'
              name='toCurrency'
              onChange={handleChange}
              value={data.toCurrency}
              required
            >
              {standardData.map((currency, index) => (
                <option key={index} value={currency.currency}>
                  {currency.currencyName} [{currency.currency}]
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            name='amount'
            type='number'
            onChange={handleChange}
            value={data.amount}
            required
          />
        </Form.Group>
      </Row>

      <Form.Row className="form-button">
        <Button variant="primary"
          type="submit"
          size="lg"
          block
        >
          GET QUOTE
        </Button>
      </Form.Row>
    </Form>
  )
}

export default CurrencyForm
