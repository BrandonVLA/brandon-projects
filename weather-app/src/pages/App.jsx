import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import "../App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const searchWeather = async (city) => {
    setLoading(true);
    setError("");

    try {
      const answer = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`,
      );

      if (!answer.ok) {
        throw new Error("City not found. Please try another city.");
      }
      const weatherData = await answer.json();
      setWeather(weatherData);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__content">
          <span className="app-badge">React • API • Portfolio Project</span>
          <h1>Weather Dashboard</h1>
          <p>Explore live weather conditions from around the world in a polished, modern interface.</p>
        </div>
      </header>

      <main className="app-main">
        <section className="search-section">
          <SearchBar onSearch={searchWeather} />
        </section>

        {loading && (
          <div className="status-card status-card--loading">
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="status-card status-card--error">
            <p>⚠️ {error}</p>
          </div>
        )}

        {weather && (
          <section className="weather-section">
            <Weather weather={weather} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
