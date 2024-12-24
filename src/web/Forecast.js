import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import useForecast from "../hooks/useForecast";
import ForecastCard from "./ForecastCard";
import Loader from "../components/Loader";

const Forecast = () => {
  const { selectedLocation } = useContext(WeatherContext);
  const { lat, lon } = selectedLocation || {}; // Destructure lat, lon from context
  const { filteredForecast, isLoading } = useForecast(lat, lon);

  // Show a message if no location is selected
  if (!lat || !lon) {
    return <p>Please select or fetch a location to view the forecast.</p>;
  }

  return (
    <div className="forecast-div">
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
              temperature={Math.floor(forecast.main.temp)}
              description={forecast.weather[0].description}
              icon={forecast.weather[0].icon}
            />
          );
        })
      )}
    </div>
  );
};

export default Forecast;
