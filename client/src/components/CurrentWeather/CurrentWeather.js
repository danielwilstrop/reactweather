import React from 'react'
import { useGlobalContext } from '../../context'
import './CurrentWeather.css'

const CurrentWeather = () => {
    const { current } = useGlobalContext()

    const getIconUrl = (icon, { large = true } = {}) => {
        const size = large ? "@2x" : ""
        return `http://openweathermap.org/img/wn/${icon}${size}.png`
      }


    return (
        <>
        <div className ='current'>
            <div className = 'current-main'>
                <h2> {current.weather} </h2>
                <img src = {getIconUrl(current.icon)} alt = 'weather-icon' />
            </div>
            <div className = 'current-data'>
                <p> <i className="fas fa-wind"></i>
                <br></br>
                {current.wind}kph</p>
                <p> <i className="fas fa-temperature-high"></i>
                <br></br>
                {current.temp} &deg;C</p>
                <p className = 'border-fix'> Feels Like:
                <br></br> 
                {current.feelsLike} &deg;C </p>
            </div>
        </div>
        </>
    )
}

export default CurrentWeather
