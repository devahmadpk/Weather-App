import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useSearch from "../hooks/useSearch";
import SearchCard from "./SearchCard";
import Loader from "../components/Loader";

const Search = () => {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const { location, geo, isLoading, handleInput, handleSelect } = useSearch();

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

      {isLoading ? (
        <Loader />
      ) : (
        location.trim() && geo.length > 0 && (
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
        )
      )}
    </div>
  );
};

export default Search;
