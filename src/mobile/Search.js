

import React from 'react'
import SearchCard from './SearchCard'
import useSearch from "../hooks/useSearch";
import Loader from "../components/Loader";
import NavDock from '../components/NavDock';

const Search = () => {
  const { location, geo, isLoading, handleInput, handleSelect } = useSearch();

  return (
    <div className='search-div-m'>
        <div className='search-box-m'>
        <input
          placeholder="Search for a location"
          onChange={handleInput}
          value={location}
        />
        </div>

        {isLoading ? (
        <Loader />
      ) : (
        location.trim() && geo.length > 0 && (
          <div className="search-dropdown-m">
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
        )
      )}

      <NavDock />

    </div>
  )
}

export default Search