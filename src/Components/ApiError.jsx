import { Link } from "react-router-dom";
import { leftArrow } from "../Utility/SVG";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const ApiError = () => {
  const navigate = useNavigate();
  const { inputValue, weatherData } = useContext(AppContext);

  if (weatherData?.cod === 200) {
    return navigate("/widget");
  }
  if(!weatherData){
    return <p>Issue with API</p>
  }

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
          {inputValue} {weatherData?.message}
        </p>
      </div>
    </div>
  );
};

export default ApiError;
