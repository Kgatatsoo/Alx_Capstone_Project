import { useState } from "react";
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = 'e5e7b343bdafbd282bc4eb37a3ba050e';
  const getWeather = async () => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
      }
      catch (error) {
        alert('city not found! Please try again.');
      }
    }
  }

 return (
  <div style={{fontFamily: 'Arial, sans-serif', textAlign: 'center', marginLeft: '80vh' , padding: '0'}}>
    <h1>Weather Dashboard</h1>
    <input
    type="text"
    placeholder="Enter city name"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    style={{ padding: '10px', fontSize: '16px'}}
    />
    <button
    onClick={getWeather}
    style={{
      padding: '10px 20px',
      fontSize: '16px',
      marginLeft: '10px',
      backgroundColor: '#007BFF' ,
      color: '#fff' ,
      border: 'none',
      borderRadius: '5px',
    }}
    >
      Get Weather
    </button>
    {weather && (
      <div style={{ marginTop: '20px'}}>
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Condition: {weather.weather[0].description}</p>
      </div>

    )}
    </div>

 );
}

export default App;