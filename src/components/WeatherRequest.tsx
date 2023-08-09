import { useState } from "react";
import { getWeather } from "../utils/getWeather";
import { WeatherResponse } from "../types/types";

export const WeatherRequest = ({
  updateResponse,
}: {
  updateResponse: (response: WeatherResponse) => void;
}) => {
  const [city, setCity] = useState("");
  const [unitGroup, setUnitGroup] = useState("metric");

  const updateCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const updateUnitGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUnitGroup = event.target.checked ? "us" : "metric";
    setUnitGroup(newUnitGroup);
  };

  const requestWeather = () => {
    getWeather(city, unitGroup, updateResponse)
  }

  return (
    <>
      <div className="header-text">
        Weather <strong>Request</strong>
      </div>
      <input
        placeholder="City or town name"
        onChange={updateCity}
        value={city}
      ></input>
      <div className="mt-3">
        <span className="metricLabel mr-2">Metric</span>
        <label className="relative inline-flex items-center cursor-pointer"
        >
          <input type="checkbox" value="unitGroup" onChange={updateUnitGroup} className="sr-only peer"/>
          <div className="toggleButton peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
        </label>
        <span className="metricLabel ml-2">Imperial</span>
      </div>
      <div>
        <button className="getForecastButton" onClick={requestWeather}>
          Get forecast
        </button>
      </div>
    </>
  );
};
