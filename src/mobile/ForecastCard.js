

import React from 'react'

const ForecastCard = ({ day, time, temperature, description, icon }) => {
  return (
    <div className='forecast-card-m'>
        <div className='card-time-m'>
            <span>{time}</span>
        </div>
        <div className='card-weather-m'>
            <span>{temperature}</span>
        </div>

    </div>
  )
}

export default ForecastCard