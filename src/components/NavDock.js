import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faLocationCrosshairs, faCloudMoonRain } from '@fortawesome/free-solid-svg-icons'; // Example icons
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import '../stylesheets/home.css';
import useGeolocation from '../hooks/useGeolocation';
import useWeather from '../hooks/useWeather';
import { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const NavDock = () => {
    const navigate = useNavigate()
    const { location, getUserLocation } = useGeolocation();
    const { setSelectedLocation } = useContext(WeatherContext)

    const fetchCurrentWeather = async () => {
        try {
            await getUserLocation();
            setSelectedLocation(location);
            navigate('/home');
        }

        catch (e) {
            console.log(e)
        }
    };


    const houseIcon = <FontAwesomeIcon icon={faHouse} />;
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    const locationIcon = <FontAwesomeIcon icon={faLocationCrosshairs} />;
    const forecastIcon = <FontAwesomeIcon icon={faCloudMoonRain} />;

    return (
        <div className="nav-dock">
            <Link to="/home">
                <button>{houseIcon}</button>
            </Link>
            <Link to="/forecast">
                <button>{forecastIcon}</button>
            </Link>
            <Link to="/search">
                <button>{searchIcon}</button>
            </Link>
            <button onClick={fetchCurrentWeather}>{locationIcon}</button>
        </div>
    );
};

export default NavDock;
