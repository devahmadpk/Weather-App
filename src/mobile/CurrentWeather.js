import React, { useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { WeatherContext } from '../contexts/WeatherContext';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import useGeolocation from '../hooks/useGeolocation'; // Corrected hook name
import useWeather from '../hooks/useWeather'; // Corrected hook name
import NavDock from '../components/NavDock';
import useForecast from '../hooks/useForecast';

const CurrentWeather = ({latitude, longitude}) => {
  const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;
  const { selectedLocation, setSelectedLocation } = useContext(WeatherContext);
  
  const { location, getUserLocation } = useGeolocation(); // Corrected hook name
  const { weather, isLoading } = useWeather(
    selectedLocation ? selectedLocation.lat : null,
    selectedLocation ? selectedLocation.lon : null
  );

  // Automatically set the selected location when geolocation is updated
  useEffect(() => {
    // If selectedLocation is not set, use the geolocation
    if(latitude && longitude && selectedLocation===null) {
      // setSelectedLocation(lat={latitude}, lon={longitude});
      const searchedLocation = {
        lat: latitude,
        lon: longitude
      }

      setSelectedLocation(searchedLocation)
    }

    if (!selectedLocation && location) {
      // console.log(selectedLocation)
      // console.log("Setting selectedLocation based on geolocation:", location);
      
      setSelectedLocation(location);
    }
  }, [location, selectedLocation, setSelectedLocation, latitude, longitude]);
  
  // Fetch the geolocation only if no location is selected
  useEffect(() => {
    if (!selectedLocation) {
      // console.log("Fetching user location...");
      getUserLocation();
      // fetchForecast();
    }
  }, [selectedLocation, getUserLocation]);


  return (
    <div className="weather-div-m">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="weather-info-div-m">
            <h3 className={weather ? "" : "small-font-m"}>
              {weather ? `${weather.main.temp}°` : "Location unable to fetch"}
            </h3>
          </div>

          <div className="location-div-m">
            <span>
              {locationIcon} {weather ? `${weather.name}, ${weather.sys.country}` : "Fetching location..."}
            </span>
          </div>
        </>
      )}

      <NavDock />
    </div>
  );
};

export default CurrentWeather;
