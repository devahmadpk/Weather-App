
import ForecastBox from "./ForecastBox";
import MetricsCard from "./MetricsCard";


const Forecast = () => {

    return (
        <div className="forecast-div">
            
            <div className="metrics-div">
                <MetricsCard />
                <MetricsCard />
                <MetricsCard />
                <MetricsCard />
            </div>
            <div className="forecast-box">
                <ForecastBox />
            </div>

        </div>
    )

}

export default Forecast;