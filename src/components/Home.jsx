import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { cityName, setCityName, getWeatherData, latLong, setLatLong } =
    useContext(AppContext);
  const navigate = useNavigate();

  // function to handle input text location
  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call with only city name
    const data = await getWeatherData("", "", cityName);
    if (data.cod === 200) {
      return navigate("/weather");
    } else {
      return navigate("/error");
    }
  };

  // function to handle button click for device location
  const handleClick = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatLong({ latitude, longitude });
    });
    if (Object.keys(latLong).length > 0) {
      // API call only with lattitude and longitude
      const data = await getWeatherData(
        latLong.latitude,
        latLong.longitude,
        ""
      );
      if (data.cod === 200) {
        return navigate("/weather");
      } else {
        return navigate("/error");
      }
    } else {
      alert("Allow device location and try again!");
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

        <button className="btn" type="submit" onClick={handleClick}>
          Get device location
        </button>
      </div>
    </div>
  );
};

export default Home;
