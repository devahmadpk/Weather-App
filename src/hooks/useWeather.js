import { useState, useEffect } from "react";

const useWeather = (lat, lon) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (lat && lon) {
      fetchWeather(lat, lon);
    }
  }, [lat, lon]);

  const fetchWeather = async (latitude, longitude) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=398af3473b98093563bdc2f653939fd1&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { weather, isLoading, fetchWeather };
};

export default useWeather;
