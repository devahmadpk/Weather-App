

import React from 'react'
import '../stylesheets/web.css'
import { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Search from './Search';
import { WeatherProvider } from '../contexts/WeatherContext';
import AppPopup from '../components/AppPopup';

const DesktopLayout = () => {
    // const [showPopup, setShowPopup] = useState(false);

    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //         setShowPopup(true);
    //     }, 5000);

    //     return () => clearTimeout(timer);

    // }, [])

    return (
        <div className='main-div'>
            
            {/* {
                showPopup ? <AppPopup close /> : null
            } */}

                <CurrentWeather />
                <Search />
                <Forecast />
            

        </div>
    );
}

export default DesktopLayout


