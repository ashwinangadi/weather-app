/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  const navigate = useNavigate();
  const { cityName, setCityName, error, setError, weatherData, loading } =
    useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weatherData?.cod === 200) {
      setError("");
      navigate("/widget");
      console.log("enter");
    }
    // } else {
    //   setError(weatherData?.cod + " -- " + weatherData?.message);
    //   console.log("IP error");
    // }
  };
  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className="page">
          <h1 className="heading">Weather App</h1>
          <hr />
          <div className="page_input_details">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={cityName}
                className="search"
                alt="text input"
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Enter City Name"
              />
            </form>
            {weatherData?.cod === 400 ? (
              <p>{weatherData?.message}</p>
            ) : weatherData?.cod === 402 ? (
              <p>{weatherData?.message}</p>
            ) : (
              ""
            )}
            <div className="orrr">
              <hr className="hrLine" />
              <p style={{ padding: "0 10px", margin: "0.5em 0" }}>or</p>
              <hr className="hrLine" />
            </div>

            <button className="btn" type="submit">
              Get device location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputPage;
