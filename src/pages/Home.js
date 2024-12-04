
import '../stylesheets/home.css'
import NavDock from "../components/NavDock";
import { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import Search from '../components/Search';
import { WeatherProvider } from '../contexts/WeatherContext';

const Home = () => {

    const [forecast, setForecast] = useState(null)
    const [geo, setGeo] = useState(null)
    const [airPol, setAirPol] = useState(null)

    useEffect(() => {
      
        console.log(geo)

        const getAirPoll = async () => {
            try {
                fetch("https://api.openweathermap.org/data/2.5/air_pollution?lat=22.543097&lon=114.057861&appid=398af3473b98093563bdc2f653939fd1")
                    .then((response) => response.json())
                    .then((json) => setAirPol(json));
                    console.log(airPol);
            }
            catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        
    }, []);

    // const fetchForecast = async () => {
    //     try {
    //         fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.684422&lon=73.047882&appid=398af3473b98093563bdc2f653939fd1&units=metric")
    //             .then((response) => response.json())
    //             .then((json) => setForecast(json));
    //             console.log(forecast);
    //     }
    //     catch (error) {
    //         console.error('Error fetching weather data:', error);
    //     }
    // };

    // fetchForecast();

    return (
        <div className='main-div'>
            <WeatherProvider>
                <CurrentWeather />
                <Search />
                <Forecast />
            </WeatherProvider>
            

        </div>
    );
};



export default Home;


