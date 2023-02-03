const WeatherForLocation = ({ weatherData }) => {
  return (
    <>
      <div className="main">
        <h1 className="header">
          {weatherData.name} {weatherData.sys.country}
        </h1>

        <h2>Temperature: {weatherData.main.temp.toFixed()}&#8451;</h2>

        <h3>{weatherData.weather[0].description}</h3>
      </div>
      <div className="side">
        <h3>Wind: {weatherData.wind.speed.toFixed()} mph</h3>

        <h3> Humidity: {weatherData.main.humidity}%</h3>

        <h3> Pressure: {weatherData.main.pressure} mb</h3>
      </div>
    </>
  );
};

export default WeatherForLocation;
