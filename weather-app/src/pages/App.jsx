import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
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
        throw new Error("City not Found");
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
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Weather App☀️</h1>
      <SearchBar onSearch={searchWeather} />

      {loading && <p>Loading Weather...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;
