import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getWeather } from './getWeather';

const App = () => {
  const [city, setCity] = useState('')

  const updateCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const [unitGroup, setUnitGroup] = useState('metric')

  const updateUnitGroup = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setUnitGroup(event.target.checked ? 'us' : 'metric')
  }

  const [response, setResponse] = useState('placeholder')

  const updateResponse = ( stringifiedResponse: any ) => {
    setResponse(stringifiedResponse)
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
      <div>
        <label htmlFor="unitGroup">American/Metric</label>
        <input id="unitGroup" type="checkbox" onChange={updateUnitGroup} value={unitGroup}></input>
      </div>
      <div>
        <input placeholder="city name" onChange={updateCity} value={city}></input>
        <button onClick={() => getWeather(city, unitGroup, updateResponse)}>Get weather</button>
      </div>
      <div>
        <p>
          {JSON.stringify(response)} 
          {/* display response data as string */}
        </p>
      </div>
    </>
  );
}

export default App;
