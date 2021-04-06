import React from 'react'
import './app.css'
import { useGlobalContext } from '../../context'
import GetLocationButton from '../GetLocationButton/GetLocationButton'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import HourlyWeather from '../HourlyWeather/HourlyWeather'
import DailyWeather from '../DailyWeather/DailyWeather'
import Loader from '../Loading/Loading'

const App = () => {
    const { loading } = useGlobalContext()

    if (loading){
        return <Loader />
    }

    return (
        <>
        <h1> Local Weather Project </h1>
           <GetLocationButton />
           <CurrentWeather />
           <HourlyWeather />
           <DailyWeather />  
        </>
    )
}

export default App
