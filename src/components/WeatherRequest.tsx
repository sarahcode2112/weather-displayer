import { useState } from "react";
import { getWeather } from "../utils/getWeather";
import { WeatherResponse } from "../types";

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
        <span className="mr-3 text-sm font-medium">Metric</span>
        <label className="relative inline-flex items-center cursor-pointer"
        >
          <input type="checkbox" value="unitGroup" onChange={updateUnitGroup} className="sr-only peer"/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
          <span className="ml-3 text-sm font-medium">Imperial</span>
        </label>
      </div>
      <div>
        <button className="getForecastButton" onClick={() => getWeather(city, unitGroup, updateResponse)}>
          Get forecast
        </button>
      </div>
    </>
  );
};
