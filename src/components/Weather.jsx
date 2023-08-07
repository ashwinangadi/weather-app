import {
  leftArrow,
  locationSVG,
  humiditySVG,
  feelsLikeSVG,
} from "../utility/SVG";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Weather = () => {
  const { weatherData } = useContext(AppContext);

  return (
    <>
      <div className="page">
        <h1 className="heading">
          <Link to="/">
            <span>{leftArrow}</span>
          </Link>
          Weather App
        </h1>
        <hr />
        <div className="page_input_details1">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            alt={`${weatherData?.weather[0]?.main} icon`}
            className="conditionImage"
          />
          <h1 className="temperature">
            {Math.trunc(weatherData?.main.temp)}
            <span className="celcius">&deg;C</span>
          </h1>
          <p className="description">{weatherData?.weather[0]?.description}</p>
          <p className="description1">
            <span>{locationSVG}</span>
            {weatherData?.name}, {weatherData?.sys.country}
          </p>
        </div>
        <div className="details">
          <div className="feels_like">
            {feelsLikeSVG}
            <div>
              <h2 className="tempFeels">
                {Math.trunc(weatherData?.main.feels_like)}&deg;C
              </h2>
              <p className="textFeels"> Feels like</p>
            </div>
          </div>
          <div className="humidity">
            {humiditySVG}
            <div>
              <h2 className="tempFeels">
                {Math.trunc(weatherData?.main.humidity)}%
              </h2>
              <p className="textFeels">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
