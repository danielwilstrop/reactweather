import React from 'react'
import { useGlobalContext } from '../../context'
import './GetLocationButton.css'


const GetLocationButton = () => {
    const { setLatitude, setLongitude } = useGlobalContext()

    const onSuccess = ({ coords }) => {
        setLatitude(coords.latitude)
        setLongitude(coords.longitude)
    }

    const onError = () => {
        document.querySelector('.error').classList.remove('error')
        document.querySelector('.error').classList.add('show-error')
    }

    const handleClick = (e) => {
        e.preventDefault()
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(onSuccess, onError)
        } else {
            // make better later
            return alert('Please allow us to use your location to access the weather')
        }
    }  
   
    return (
        <>
            <button className= 'btn' onClick = {handleClick}> Use Location <i className="fas fa-location-arrow"></i></button>
            <p className = 'error'> There Was a problem getting your location, please try again </p>
        </>
    )
}

export default GetLocationButton