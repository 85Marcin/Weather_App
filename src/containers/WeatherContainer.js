import { useState } from "react";
import WeatherForLocation from "../components/WeatherForLocation";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  const getWeather = () => {
    if (location !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=&units=metric`;

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that location");
          }
          return res.json();
        })
        .then((data) => {
          setWeatherData(data);
          setError(null);
        })
        .catch((err) => setError(err.message));
    }
  };

  const handleLocationInput = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getWeather();
    setLocation("");
  };
  return (
    <>
      <div className="app">
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            className="input"
            type="text"
            value={location}
            onChange={handleLocationInput}
            placeholder="Enter location"
          ></input>
        </form>

        {weatherData.main && weatherData.sys && (
          <WeatherForLocation weatherData={weatherData} />
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default WeatherContainer;
