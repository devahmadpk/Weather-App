

import { useState, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const useSearch = () => {
  const { setSelectedLocation } = useContext(WeatherContext); // Access context
  const [location, setLocation] = useState("");
  const [geo, setGeo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInput = (e) => {
    setLocation(e.target.value);

    if (typingTimeout) clearTimeout(typingTimeout);

    setTypingTimeout(
      setTimeout(() => {
        if (e.target.value.trim()) {
          fetchGeo(e.target.value);
        } else {
          setGeo([]);
        }
      }, 500)
    );
  };

  const fetchGeo = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=398af3473b98093563bdc2f653939fd1`
      );
      const json = await response.json();
      setGeo(json);
    } catch (error) {
      console.error("Error fetching location data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (location) => {
    setSelectedLocation(location);
    setLocation("");
    setGeo([]);
  };

  return {
    location,
    geo,
    isLoading,
    handleInput,
    handleSelect,
  };
};

export default useSearch;
