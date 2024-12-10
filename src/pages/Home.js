
import { useContext, useEffect } from 'react';
import { WeatherContext, WeatherProvider } from '../contexts/WeatherContext';
import MobileLayout from '../mobile/MobileLayout';
import DesktopLayout from '../web/DesktopLayout';

const Home = () => {

    const {selectedLocation} = useContext(WeatherContext)
    const deviceWidth = window.matchMedia('(max-width: 670px)');
    const mobileView = deviceWidth.matches;

    return (
        <div className='main-div'>

            <WeatherProvider>
                {
                    mobileView ? (
                        selectedLocation ? 
                        (<MobileLayout  lat = {selectedLocation.lat} lon = {selectedLocation.lon}/>) :
                        (<MobileLayout  />)
                        
                    ) : (
                        <DesktopLayout />
                    )
                }

            </WeatherProvider>
            
           
        </div>
    );
};



export default Home;


