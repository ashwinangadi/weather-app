export async function getWeatherData({city}) {
  
    let appid= "606cc755aae496dbe7526d77b182727e"
    // let id = process.env.OPENWEATHER_API;

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${appid}`
    
  );
  const result = await data.json();

  return result;
}
