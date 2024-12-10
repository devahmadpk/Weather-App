

import React from 'react'
import { useState, useEffect } from 'react'
import { WeatherProvider } from '../contexts/WeatherContext';
import NavDock from '../components/NavDock'
import CurrentWeather from './CurrentWeather'
import Search from './Search';
import '../stylesheets/mobile.css'
import Forecast from './Forecast';

const MobileLayout = ({lat, lon}) => {
  // const [showPopup, setShowPopup] = useState(false);

  //   useEffect(() => {

  //       const timer = setTimeout(() => {
  //           setShowPopup(true);
  //       }, 5000);

  //       return () => clearTimeout(timer);

  //   }, [])

    return (
        <div className='main-div-m'>
            
            {/* {
                showPopup ? <AppPopup close /> : null
            } */}

            <CurrentWeather latitude={lat} longitude={lon} />
            <NavDock />
            

        </div>
    );
}

export default MobileLayout