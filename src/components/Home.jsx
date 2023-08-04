import { useContext } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { cityName, setCityName, getWeatherData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWeatherData(cityName);
    if (data.cod === 200) {
      return navigate("/weather");
    } else {
      return navigate("/error");
    }
  };

  return (
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
  );
};

export default Home;
