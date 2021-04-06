import React from 'react'
import './HourlyWeather.css'
import { useGlobalContext } from '../../context'

const HourlyWeather = () => {
    const {hourly} = useGlobalContext()

    const hourly24 = hourly.slice(0, 24)

    const getIconUrl = (icon, { large = false } = {}) => {
        const size = large ? "@2x" : ""
        return `http://openweathermap.org/img/wn/${icon}${size}.png`
      }

    return (
        <>
        <div className = 'hourly-container'>
            {hourly24.map((hour, index) => {
                return (
                    <>
                    <div key = {index} className = 'hourly-item' >
                        <p className = 'time'> {hour.time}</p>
                        <img src = {getIconUrl(hour.icon)} alt = 'weather icon' />
                            <p><i className="fas fa-temperature-high"></i>{hour.temp} &deg;C</p>
                            <p> <i className="fas fa-cloud-rain"></i> {hour.rain}mm</p>
                    </div>
                    </>
                    )
            })}
        </div>
        </>
    )
}

export default HourlyWeather