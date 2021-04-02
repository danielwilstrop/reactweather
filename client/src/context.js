import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { currentx, hourlyx, futurex } from './initialData'
import axios from 'axios'

const AppContext = React.createContext()

const AppProivider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [latitude, setLatitude] = useState(20)
    const [longitude, setLongitude] = useState(-1.617780)
    const [current, setCurrent] = useState(currentx)
    const [hourly, setHourly] = useState(hourlyx)
    const [future, setFuture] = useState(futurex)

    const fetchWeather = useCallback( async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:8000/weather', {
                params: { lat: latitude, lon: longitude }
            })   
        const { current, hourly, future } = await response.data
            if (current && hourly && future){
                setCurrent(current)
                setHourly(hourly)
                setFuture(future)
            } else {
                setCurrent(currentx)
                setFuture(hourlyx)
                setHourly(futurex)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            return "There was a problem fetching the weather information, please try again" 
        }
    },[latitude, longitude])
   
    useEffect( () => {
        fetchWeather()
    }, [latitude, longitude, fetchWeather])

    return <AppContext.Provider value={{ 
                                loading,
                                current,
                                future,
                                hourly,
                                setLongitude,
                                setLatitude,
                                fetchWeather
            }}>
            {children}
            </AppContext.Provider>
    
 }

 export const useGlobalContext = () => {
     return useContext(AppContext)
 }

 export { AppContext, AppProivider }
