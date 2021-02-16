import React from 'react'
import { useState } from 'react'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'


const CurrencyForm = ({ history }) => {
  const [data, setData] = useState({})


  const handleChange = e => {
    setData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
    console.log(data);
  }

  const handleSubmit = e => {
    e.preventDefault()
    // add data to the 
    history.push('/result')
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
              value={data.firstname || ""}
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
              value={data.lastname || ""}
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
            value={data.email || ""}
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
              type='text'
              placeholder=''
              aria-describedby='inputGroupPrepend'
              name='mobile'
              onChange={handleChange}
              value={data.mobile || ""}
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId='formGridFromCurrency'>
            <Form.Label>From Currency *</Form.Label>
            <Form.Control as='select' required onChange={handleChange} value={data.fromCurrency || ""}>
              <option>Australian dollar(AUD)</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId='formGridToCurrency'>
            <Form.Label>To Currency</Form.Label>
            <Form.Control as='select' required onChange={handleChange} value={data.toCurrency || ""}>
              <option>American dollar(AUD)</option>
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
            value={data.amount || ""}
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
          Get Quote
        </Button>
      </Form.Row>
    </Form>
  )
}

export default CurrencyForm