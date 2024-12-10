

import { useState, useEffect } from "react";

const useForecast = (lat, lon) => {
  const [forecastData, setForecastData] = useState([]);
  const [filteredForecast, setFilteredForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (lat && lon) {
      fetchForecast(lat, lon);
    }
  }, [lat, lon]);

  const fetchForecast = async (latitude, longitude) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=398af3473b98093563bdc2f653939fd1&units=metric`
      );
      const data = await response.json();
      setForecastData(data.list);
      filterForecast(data.list);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterForecast = (list) => {
    const currentDateTime = new Date();
    const currentHour = currentDateTime.getHours();

    const closestForecasts = list
      .filter((item) => {
        const forecastDate = new Date(item.dt_txt);
        return forecastDate.getHours() >= currentHour;
      })
      .slice(0, 4);

    setFilteredForecast(closestForecasts);
  };

  return { forecastData, filteredForecast, isLoading, fetchForecast };
};

export default useForecast;
