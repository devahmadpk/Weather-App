import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { WeatherContext } from '../contexts/WeatherContext';

const CurrentWeather = () => {
    const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;
    const liveLocationIcon = <FontAwesomeIcon icon={faLocationCrosshairs} className="crosshair-icon" />;
    const { selectedLocation, setSelectedLocation } = useContext(WeatherContext); // Access context
    const [weather, setWeather] = useState(null);

    // Function to fetch weather based on latitude and longitude
    const fetchWeather = async (lat, lon) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=398af3473b98093563bdc2f653939fd1&units=metric`
            );
            const json = await response.json();
            setWeather(json);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Function to fetch user's current location
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setSelectedLocation({ lat: latitude, lon: longitude });
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                    alert('Unable to fetch location. Please allow location access.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    // Automatically fetch location and weather on component load
    useEffect(() => {
        getUserLocation();
    }, []);

    // Fetch weather whenever `selectedLocation` is updated
    useEffect(() => {
        if (selectedLocation) {
            fetchWeather(selectedLocation.lat, selectedLocation.lon);
        }
    }, [selectedLocation]);

    return (
        <div className="weather-div">
            <div className="weather-info-div">
                <h3>{weather ? `${weather.main.temp}` : 'Loading...'}</h3>
            </div>

            <div className="location-div">
                <span>
                    {locationIcon} {weather ? `${weather.name}, ${weather.sys.country}` : 'Fetching location...'}
                </span>
                {/* Button to manually fetch user's location */}
                <button onClick={getUserLocation}>{liveLocationIcon}</button>
            </div>
        </div>
    );
};

export default CurrentWeather;
