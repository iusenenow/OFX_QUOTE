import React from 'react'
import { useState } from 'react'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'


const CurrencyForm = props => {
  const [values, setValues] = useState({})

  

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.history.push('/quote')
    
  }

  return (
    <Form onSubmit={handleSubmit}>
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
            value={values.firstname}
          />
        </Form.Group>
        </Col>

        <Form.Group controlId='formGridLastName'>
          <Form.Label>Last Name *</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Last Name'
            name='lastname'
            onChange={handleChange}
            value={values.lastname}
          />
        </Form.Group>
      </Row>

      <Form.Group controlId='formGridEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={values.email}
        />
      </Form.Group>

      <Form.Group controlId='formGridAddress2'>
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
            value={values.mobile}
          />
        </InputGroup>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>From Currency</Form.Label>
          <Form.Control as='select'>
            <option>Australian dollar(AUD)</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>To Currency</Form.Label>
          <Form.Control as='select'>
            <option>American dollar(AUD)</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group id='formGridCheckbox'>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          name='amount'
          type='number'
          onChange={handleChange}
          value={values.amount}
          required
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Get Quote
      </Button>
    </Form>
  )
}

export default CurrencyForm
