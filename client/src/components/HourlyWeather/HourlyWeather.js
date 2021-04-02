import React from 'react'
import './HourlyWeather.css'
import { useGlobalContext } from '../../context'

const HourlyWeather = () => {
    const {hourly} = useGlobalContext()

    const getIconUrl = (icon, { large = false } = {}) => {
        const size = large ? "@2x" : ""
        return `http://openweathermap.org/img/wn/${icon}${size}.png`
      }

    return (
        <>
        <div className = 'hourly-container'>
            {hourly.map((hour) => {
                return (
                    <>
                    <div className = 'hourly-item' key = {hour.time} >
                        <p className = 'time'> {hour.time}</p>
                        <img src = {getIconUrl(hour.icon)} alt = 'weather icon' />
                            <p><i className="fas fa-temperature-high"></i>{hour.temp} &deg;C</p>
                            <p> <i class="fas fa-cloud-rain"></i> {hour.rain}mm</p>
                    </div>
                    </>
                    )
            })}
        </div>
        </>
    )
}

export default HourlyWeather