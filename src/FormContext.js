import React, { useState, createContext } from 'react'
export const FormContext = createContext()

export const FormProvider = ({children}) => {
  const [currencyData, setCurrencyData] = useState([])
  return (
    <FormContext.Provider value={[currencyData, setCurrencyData]}>
      {children}
    </FormContext.Provider>
  )
}
