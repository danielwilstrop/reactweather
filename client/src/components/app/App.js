import React from 'react'
import './app.css'
import { useGlobalContext } from '../../context'
import GetLocationButton from '../GetLocationButton/GetLocationButton'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import HourlyWeather from '../HourlyWeather/HourlyWeather'
import DailyWeather from '../DailyWeather/DailyWeather'


const App = () => {
    const { loading } = useGlobalContext()
    const searchValue = React.useRef(0)
    const searchValue2 = React.useRef(0)

    if (loading){
        return <h1> Loading </h1>
    }

    return (
        <>
           <GetLocationButton />
           <CurrentWeather />
           <HourlyWeather />
           <DailyWeather />  
        </>
    )
}

export default App
