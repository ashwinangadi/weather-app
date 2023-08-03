import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext("");

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const debounce = setTimeout(() => {
      getWeatherData();
    }, 200);
    return () => clearTimeout(debounce);
  }, [cityName]);

  async function getWeatherData() {
    setLoading(true)
    let appid = import.meta.env.VITE_OPENWEATHER_API;
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${appid}`
    );
    const result = await data.json();
    setWeatherData(result);
    console.log(weatherData)
    setLoading(false)
  }

  console.log(weatherData)
  return (
    <AppContext.Provider
      value={{ cityName, setCityName, weatherData, error, setError, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
