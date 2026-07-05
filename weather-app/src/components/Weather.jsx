function Weather({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherInfo, sys, wind, clouds } = weather;
  const description = weatherInfo[0].description.charAt(0).toUpperCase() + weatherInfo[0].description.slice(1);
  const iconMap = {
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    drizzle: "🌦️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
  };
  const condition = weatherInfo[0].main.toLowerCase();
  const icon = iconMap[condition] || "🌤️";

  return (
    <div className="weather-card">
      <div className="weather-card__hero">
        <div>
          <span className="eyebrow">Current conditions</span>
          <h2>
            {name}, {sys.country}
          </h2>
          <p className="weather-description">{description}</p>
        </div>
        <div className="weather-icon" aria-hidden="true">
          {icon}
        </div>
      </div>

      <div className="weather-grid">
        <div className="metric-card">
          <p className="label">Temperature</p>
          <p className="value">{main.temp}°C</p>
        </div>

        <div className="metric-card">
          <p className="label">Feels like</p>
          <p className="value">{main.feels_like}°C</p>
        </div>

        <div className="metric-card">
          <p className="label">Humidity</p>
          <p className="value">{main.humidity}%</p>
        </div>

        <div className="metric-card">
          <p className="label">Min temp</p>
          <p className="value">{main.temp_min}°C</p>
        </div>

        <div className="metric-card">
          <p className="label">Max temp</p>
          <p className="value">{main.temp_max}°C</p>
        </div>

        <div className="metric-card">
          <p className="label">Cloud cover</p>
          <p className="value">{clouds.all}%</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-card">
          <p className="label">Pressure</p>
          <p className="value">{main.pressure} hPa</p>
        </div>
        <div className="detail-card">
          <p className="label">Wind speed</p>
          <p className="value">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
