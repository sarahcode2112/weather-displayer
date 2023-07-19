import React, { ReactEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getWeather } from './getWeather';
import { Response } from './types'
import { WeatherDisplay } from './WeatherDisplay';

const App = () => {
  const [city, setCity] = useState('')
  const [unitGroup, setUnitGroup] = useState('metric')
  const [response, setResponse] = useState<Response>({ 
    resolvedAddress: "", description: "", days: [
      { hours: 
        [
          { datetime: '', temp: ''}
        ]
      }
    ] 
  })

  const updateCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }
  const updateUnitGroup = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setUnitGroup(event.target.checked ? 'us' : 'metric')
  }
  const updateResponse = (response: Response) => {
    setResponse(response);
  };
  

  return (
    <>
      <div>
        <label htmlFor="unitGroup">American/Metric</label>
        <input id="unitGroup" type="checkbox" onChange={updateUnitGroup} value={unitGroup}></input>
      </div>
      <div>
        <input placeholder="city name" onChange={updateCity} value={city}></input>
        <button onClick={() => getWeather(city, unitGroup, updateResponse)}>Get weather</button>
      </div>
      <WeatherDisplay response={response} />
    </>
  );
}

export default App;
