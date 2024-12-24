import React from "react";

const ForecastCard = ({ day, time, temperature, description, icon }) => {
  return (
    <div className="forecast-card">
      <span>{day}</span>
      <p>{time}</p>
      <p>{temperature}°C</p>
      <p>{description}</p>
    </div>
  );
};

export default ForecastCard;
