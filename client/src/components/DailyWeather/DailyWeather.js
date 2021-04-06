import React from 'react'
import { useGlobalContext } from '../../context'
import './DailyWeather.css'

const DailyWeather = () => {
    const { future } = useGlobalContext()
    const daily = future.slice(0, 3)

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'aMrch', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']

    const getIconUrl = (icon, { large = false } = {}) => {
        const size = large ? "@2x" : ""
        return `http://openweathermap.org/img/wn/${icon}${size}.png`
      }

    return (
        <div className = 'daily-container'>
           {daily.map((day, index) => {
               const dayOfWeek = daysOfWeek[new Date(day.date).getDay()] 
               const date = new Date(day.date).getDate()
               const month = months[new Date(day.date).getMonth()]

               return (
                <div key = {index} className = 'daily-item' >
                <p> {dayOfWeek} {date} {month} </p>
                <img src = {getIconUrl(day.icon)} alt = 'weather icon' />
                    <p><i className="fas fa-temperature-high"></i>{day.temp} &deg;C</p>
                    <p> <i className="fas fa-cloud-rain"></i> {day.wind}kph</p>
                </div>
               )
           })}
        </div>
    )
}

export default DailyWeather