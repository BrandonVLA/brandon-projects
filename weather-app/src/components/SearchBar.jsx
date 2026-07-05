import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim().length > 0) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="search-card">
      <div className="search-card__header">
        <span className="eyebrow"> Live weather explorer </span>
        <h2>Search any city:</h2>
        <p>Check current conditions, humidity, wind and more in one clean dashboard.</p>
      </div>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          id="ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name (e.g. Madrid, Rome, Tokyo)"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Check weather
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
