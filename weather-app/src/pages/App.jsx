import React from "react";
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
        <h1>🌤️ Weather Forecast System</h1>
        <p>Get real-time weather information for any city in the world</p>
      </header>

      <main className="app-main">
        <section className="search-section">
          <SearchBar onSearch={searchWeather} />
        </section>

        {loading && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center">
            <p className="text-gray-600">Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 font-medium">⚠️ {error}</p>
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
