# Weather App -- HootBoard Assignment [Live Demo](https://weatherr-appp.web.app/)

#### ⛈ Weather app with OpenWeatherMap API.
The WeatherApp is a user-friendly and reliable weather application that allows users to stay informed about weather conditions for any location of their choice. With a simple and intuitive interface, users can input their desired location and instantly access real-time weather information, including temperature, humidity and more. The app also features dynamic weather icons that visually represent the current weather condition. The WeatherApp provides accurate and up-to-date weather data to keep users informed and ready for any weather situation.

## Set-Up Guide
- [Features](#features)
- [Built With](#built-with)
- [Getting started](#getting-started)
- [Author](#author)

## Features
 1. **Location Input:** The application has a user-friendly form allowing users to input their desired location for weather data retrieval.
 2. **Weather Information:** The application displays the temperature, humidity, and other weather conditions for the user's input location.
 3. **Weather Icons:** The application displays appropriate weather icons based on the current weather condition for the user's input location.
 4. **Response Time:** The application loads quickly and responds to user interactions promptly to provide a smooth user experience.
 5. **User Interface Design:** The UI/UX intuitive, visually appealing, and accessible to all kind of users.
 6. **Error Handling:** The application handles errors gracefully, providing clear error messages to users.

## Built With:
 - HTML5
 - CSS3
 - Javascript (ES6+)
 - ReactJS
 - React Router
 - Vite

## Getting started
Before doing any of this, if you're using your own laptop/desktop, make sure you've got the latest versions of Node and npm installed.

    node -v
    npm -v



Follow these steps to clone and set up the project on your local machine:

1. **Clone the repository and navigate to folder**:

   ```bash
   https://github.com/ashwinangadi/weather-app.git
   cd weather-app

2. **Make it your own**: Run the three necessary comand using Powershell. You mught need elevated privileges.

    ```bash
    rm -r -fo .git
    git init 
    npm init

3. **Install dependencies**:

   ```bash
   npm install
 
4. **Create an `.env` file in th same folder:** Add the following code in it,

    ```bash
    VITE_OPENWEATHER_API = "PASTE_YOUR_API_KEY_HERE"
    
5. **To Access API key in  project:** Store it in a variable to access the API_KEY.

    ```bash
    import.meta.env.VITE_OPENWEATHER_API

6. **Run the Project:** The development server can be accessed on **http://localhost:5173**

    ```bash
    npm run dev

## Author
 - GitHub : **https://github.com/ashwinangadi**
 - Linkedin : **https://www.linkedin.com/in/ashwin-angadi**
 - Website : **http://ashwin-angadi.web.app**
