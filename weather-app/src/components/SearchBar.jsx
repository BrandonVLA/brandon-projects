import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim().length > 0) {
      onSearch(city);
    }
  };
  return (
    <div>
      <h2>Search</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="ciudad">City: </label>
        <input
          type="text"
          id="ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Example: Madrid, Rome, Tokyo"
        />
      </form>
    </div>
  );
}

export default SearchBar;
