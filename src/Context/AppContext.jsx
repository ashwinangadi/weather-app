import { createContext, useState } from "react";

const AppContext = createContext("");

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = async (location) => {
    let apiKey = import.meta.env.VITE_OPENWEATHER_API;
    setLoading(true);
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`
      );
      const result = await data.json();
      setWeatherData(result);
      return result
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return error
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        weatherData,
        setWeatherData,
        loading,
        setLoading,
        cityName,
        setCityName,
        getWeatherData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
