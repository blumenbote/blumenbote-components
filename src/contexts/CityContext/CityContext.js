import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'

export const CityContext = createContext()

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState(new Map())

  const [ordering] = useApi()

  useEffect(() => {
    const getCities = async () => {
      try {
        const { content } = await ordering.countries().get()
        const { result, error } = content

        if (result.length) {
          let resultCities = new Map()
          for (const { cities } of result) {
            for (const city of cities) {
              resultCities.set(city.id, city.name.toLowerCase())
            }
          }
          setCities(resultCities)
        }
      } catch (e) {
        console.log('error', e)
      }
    }

    getCities()
  }, [])
  
  return (
    <CityContext.Provider value={[cities]}>{children}</CityContext.Provider>
  )
}

/**
 * Hook
 */
export const useCity = () => {
  const CityManager = useContext(CityContext)
  return CityManager || [{}]
}
