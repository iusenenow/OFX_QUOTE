import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Spinner, Button, Card } from 'react-bootstrap'
import { FormContext } from './FormContext'

const CurrencyResult = props => {

  const [currencyData] = useContext(FormContext)
  const [fetchData, setFetchData] = useState({
    loading: true,
    urlData: {},
  })

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${currencyData.fromCurrency}/${currencyData.toCurrency}/10000?format=json`)
        const urlData = await response.json()
        setFetchData({ loading: false, urlData })
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  const handleClick = () => props.history.push('/')

  return (
    <div className="result">
      {fetchData.loading ?
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> :
        <Card className="card" style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>QFX Customer Rate</Card.Title>
            <Card.Title variant="primary">{fetchData.urlData.CustomerRate || <Spinner animation="border" size="sm" variant="primary" />}</Card.Title>
            <Card.Text>From</Card.Text>
            <Card.Title>{currencyData.fromCurrency} {currencyData.amount}</Card.Title>
            <Card.Text>To</Card.Text>
            <Card.Title>{currencyData.toCurrency} {currencyData.amount * fetchData.urlData.CustomerRate || <Spinner animation="border" size="sm" variant="primary" />}</Card.Title>
            <Button onClick={handleClick} variant='primary' type='submit'>START NEW QUOTE</Button>
          </Card.Body>
        </Card>}
    </div>
  )
}

export default CurrencyResult
