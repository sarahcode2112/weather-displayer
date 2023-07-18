import React, { ReactEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getWeather } from './getWeather';
import { Response } from './types'
import { formatResponse } from './helpers';

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
      <section>
        <p>
          Location: {formatResponse(response.resolvedAddress)}
        </p>
        <p>
          Quick forecast: {formatResponse(response.description)}
        </p>
        <div>
          <input type="checkbox" name="showToday" id="showToday" className="peer"></input>
          <div className="peer-checked:visible">
            <p>
              Today's hourly forecast: {
                formatResponse(response.days[0].hours.map((hour) => [ hour.datetime, hour.temp ]))
              }
            </p>
          </div>
        </div>
        <p>
          Full response: {JSON.stringify(response)} 
          {/* display response data as string */}
        </p>
      </section>
    </>
  );
}

export default App;
