function Weather({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherInfo, sys, wind, clouds } = weather;
  const description = weatherInfo[0].description.charAt(0).toUpperCase() + weatherInfo[0].description.slice(1);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">
          {name}, {sys.country}
        </h2>
        <p className="text-gray-600 capitalize text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium mb-2">Temperature</p>
          <p className="text-4xl font-bold text-blue-600">{main.temp}°C</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium mb-2">Feels Like</p>
          <p className="text-3xl font-semibold text-gray-900">{main.feels_like}°C</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium mb-2">Humidity</p>
          <p className="text-3xl font-semibold text-gray-900">{main.humidity}%</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium mb-2">Min Temp</p>
          <p className="text-2xl font-semibold text-gray-900">{main.temp_min}°C</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium mb-2">Max Temp</p>
          <p className="text-2xl font-semibold text-gray-900">{main.temp_max}°C</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium mb-2">Cloud Cover</p>
          <p className="text-2xl font-semibold text-gray-900">{clouds.all}%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">Pressure</p>
          <p className="text-2xl font-semibold text-gray-900">{main.pressure} hPa</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">Wind Speed</p>
          <p className="text-2xl font-semibold text-gray-900">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
