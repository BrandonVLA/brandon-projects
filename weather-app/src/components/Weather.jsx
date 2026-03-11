function Weather({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherInfo, sys } = weather;
  return (
    <div>
      <h1>
        Weather in {name}, {sys.country}
      </h1>
      <p>Temperature: {main.temp}°C.</p>
      <p>Feels Like:{main.feels_like}.</p>
      <p>
        Min: {main.temp_min}°C. Max: {main.temp_max}°C .
      </p>
      <p>Weather: {weatherInfo[0].description}.</p>
      <p>Humidity: {main.humidity}%.</p>
    </div>
  );
}

export default Weather;
