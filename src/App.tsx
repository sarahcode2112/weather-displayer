import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getWeather } from './getWeather';

const App = () => {
  const [city, setCity] = useState('')

  const updateCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <input placeholder='city name' onChange={updateCity} value={city}></input>
      <button onClick={() => getWeather(city)}>Get weather</button>
    </>
  );
}

export default App;
