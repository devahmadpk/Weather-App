import React, { createContext, useState } from 'react';

// Create a context
export const WeatherContext = createContext();

// Create a provider component
export const WeatherProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);
// console.log("here is selected location", selectedLocation)
    return (
        <WeatherContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </WeatherContext.Provider>
    );
};
