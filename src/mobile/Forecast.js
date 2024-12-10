

import React, {useContext} from 'react'
import ForecastCard from './ForecastCard'
import { WeatherContext } from "../contexts/WeatherContext";
import useForecast from "../hooks/useForecast";
import Loader from "../components/Loader";
import NavDock from '../components/NavDock';


const Forecast = () => {
  const { selectedLocation } = useContext(WeatherContext);
  const { lat, lon } = selectedLocation || {}; // Destructure lat, lon from context
  const { filteredForecast, isLoading } = useForecast(lat, lon);

  return (
    <div className='forecast-div-m'>
        <h3>Today's weather forecast</h3>
        <div className='forecast-card-holder'>
        {isLoading ? (
        <Loader />
      ) : (
        filteredForecast.map((forecast) => {
          const date = new Date(forecast.dt_txt);
          const day = date.toLocaleDateString("en-US", { weekday: "long" });
          const time = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <ForecastCard
              key={forecast.dt}
              day={day}
              time={time}
              temperature={forecast.main.temp}
              description={forecast.weather[0].description}
              icon={forecast.weather[0].icon}
            />
          );
        })
      )}

        </div>
        <NavDock />
    </div>
    
  )
}

export default Forecast