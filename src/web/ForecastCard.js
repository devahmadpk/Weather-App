import React from "react";

const ForecastCard = ({ day, time, temperature, description, icon }) => {
  return (
    <div className="forecast-card">
      <p>{day}</p>
      <p>{time}</p>
      <p>{temperature}°C</p>
      <p>{description}</p>
    </div>
  );
};

export default ForecastCard;
