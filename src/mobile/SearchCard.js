

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SearchCard = ({ city, country, lat, lon, onSelect }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    onSelect({ city, country, lat, lon });
    navigate('/home');
  };

    const compassIcon = <FontAwesomeIcon icon= {faCompass} />
  return (
    <div className='search-card-m' onClick={handleClick}>
        <p><span>{compassIcon}</span> <span>{city}, {country}</span></p>
    </div>
  )
}

export default SearchCard