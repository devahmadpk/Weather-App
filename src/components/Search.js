import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherContext } from '../contexts/WeatherContext';
import SearchCard from './SearchCard';

const Search = () => {
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    const { setSelectedLocation } = useContext(WeatherContext); // Access context
    const [location, setLocation] = useState('');
    const [geo, setGeo] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleInput = (e) => {
        setLocation(e.target.value);

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        setTypingTimeout(
            setTimeout(() => {
                if (e.target.value.trim()) {
                    fetchGeo(e.target.value);
                }
            }, 100)
        );
    };

    const fetchGeo = async (query) => {
        if (!query) return;

        try {
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=398af3473b98093563bdc2f653939fd1`
            );
            const json = await response.json();
            setGeo(json);
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    const handleSelect = (location) => {
        setSelectedLocation(location); // Update context
        setLocation(''); // Clear input field
        setGeo([]); // Clear results
    };

    return (
        <div className="search-div">
            <div className="search-box">
                <input
                    placeholder="Search for a location"
                    onChange={handleInput}
                    value={location}
                />
                <button>{searchIcon}</button>
            </div>

            {location.trim() && geo.length > 0 && (
                <div className="search-dropdown">
                    {geo.map((result, index) => (
                        <SearchCard
                            key={index}
                            city={result.name}
                            country={result.country}
                            lat={result.lat}
                            lon={result.lon}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
