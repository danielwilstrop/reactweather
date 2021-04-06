const { format } = require('date-fns')

const kToCelcius = (num) => {
    return Math.round(num -273.15)
}
const hoursInSecs = 3600
const hourlyData = ({ hourly, current}) => {
    return hourly 
        .filter(hour => hour.dt > current.dt - hoursInSecs)
        .map(hour => {
            return {
                time: format(new Date(hour.dt * 1000), 'ha'),
                icon: hour.weather[0].icon,
                temp: kToCelcius(hour.temp),
                rain: hour.pop * 100
            }
        })
}

const currentData = ({ current }) => {
    return {
            temp: kToCelcius(current.temp),
            feelsLike: kToCelcius(current.feels_like),
            wind: Math.round(current.wind_speed),
            weather: current.weather[0].main,
            description: current.weather[0].description,
            icon: current.weather[0].icon,
    }
}

const futureData = ({ daily }) => {
    return daily.slice(1).map(day => {
        return {
            date: day.dt,
            temp: kToCelcius(day.temp.day),
            wind: Math.round(day.wind_speed),
            weather: day.weather[0].main,
            icon: day.weather[0].icon
        }
    })
}

module.exports = {
    hourlyData,
    currentData,
    futureData
}
