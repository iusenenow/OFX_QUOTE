import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FormContext } from './FormContext'

const CurrencyResult = () => {

  const [currencyData] = useContext(FormContext)
  const [apiData, setApiData] = useState({
    loading: true,
    urlData: {},
  })

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/GBP/10000?format=json')

      const urlData = response.json()
      setApiData({ ...apiData, urlData })
    }

    getData()
  }, [])

  return (
    <div>
      <h2>Username: {currencyData.firstname} {currencyData.lastname}</h2>
    </div>
  )
}

export default CurrencyResult
