import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { WeatherContext } from "../contexts/WeatherContext";
import Loader from "../components/Loader";
import useWeather from "../hooks/useWeather";
import useGeolocation from "../hooks/useGeolocation";
import { useNavigate } from "react-router-dom";

const CurrentWeather = () => {
  const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;
  const liveLocationIcon = <FontAwesomeIcon icon={faLocationCrosshairs} className="crosshair-icon" />;

  const { selectedLocation, setSelectedLocation } = useContext(WeatherContext);

  const navigate = useNavigate();

  // Use hooks for geolocation and weather
  const { location, getUserLocation } = useGeolocation();
  const { weather, isLoading } = useWeather(
    selectedLocation ? selectedLocation.lat : null,
    selectedLocation ? selectedLocation.lon : null
  );

  // Automatically set the selected location when geolocation is updated
  useEffect(() => {
    if (!selectedLocation && location) {
      setSelectedLocation(location);
    }
  }, [location, selectedLocation, setSelectedLocation]);

  // Automatically fetch location if not already set
  useEffect(() => {
    if (!selectedLocation) {
      getUserLocation();
    }
  }, [selectedLocation, getUserLocation]);

  const fetchCurrentWeatherD = async () => {
    try {
        await getUserLocation();
        setSelectedLocation(location);
        navigate('/home');
    }

    catch (e) {
        console.log(e)
    }
};

  return (
    <div className="weather-div">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="weather-info-div">
            <h3 className={weather ? "" : "small-font"}>
              {weather ? `${weather.main.temp}°` : "Unable to fetch location"}
            </h3>
          </div>
          <div className="location-div">
            <span>
              {locationIcon}{" "}
              {weather ? `${weather.name}, ${weather.sys.country}` : "Fetching location..."}
            </span>
            {/* Button to manually fetch user's location */}
            <button onClick={fetchCurrentWeatherD}>{liveLocationIcon}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
