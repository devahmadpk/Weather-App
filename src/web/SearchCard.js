

import React from 'react';

const SearchCard = ({ city, country, lat, lon, onSelect }) => {
    const handleClick = () => {
        onSelect({ city, country, lat, lon });
    };

    return (
        <div className="card" onClick={handleClick}>
            <p>{city}, {country}</p>
        </div>
    );
};

export default SearchCard;
