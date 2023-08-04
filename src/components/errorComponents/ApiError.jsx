import { leftArrow } from "../../utility/SVG";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const ApiError = () => {
  const { cityName, weatherData } = useContext(AppContext);

  return (
    <div className="page ">
      <h1 className="heading">
        <Link to="/">
          <span>{leftArrow}</span>
        </Link>
        Weather App
      </h1>
      <hr />
      <div className="errorCenter">
        <h1 style={{ fontSize: "10em", margin: "0", color: "red" }}>
          {weatherData?.cod}
        </h1>
        <p style={{ fontSize: "2.5em", margin: "0" }}>
          {cityName} {weatherData?.message}
        </p>
      </div>
    </div>
  );
};

export default ApiError;
