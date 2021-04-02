const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())

const { currentData, futureData, hourlyData } = require('./parseData.js')

app.use(express.urlencoded({ extended:true }))

// const lat = 54.978252
// const lon = -1.617780

app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER}`)  
            const hourly = hourlyData(response.data)
            const current = currentData(response.data)
            const future = futureData(response.data)
            res.json({
               current,
               hourly,
               future
            })
       
    } catch (error) {
        res.json({ status: 'error', error: 'There was a problem fetching the weather, please try again'})
    }
})

app.listen(PORT)

