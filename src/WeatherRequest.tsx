import { useState } from "react";
import { getWeather } from "./getWeather";
import { Response } from "./types";

export const WeatherRequest = ({
  updateResponse,
}: {
  updateResponse: (response: Response) => void;
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
      <label htmlFor="unitGroup">American/Metric</label>
      <input
        id="unitGroup"
        type="checkbox"
        onChange={updateUnitGroup}
        value={unitGroup}
      >
      </input>
      <div>
        <button className="getForecastButton" onClick={() => getWeather(city, unitGroup, updateResponse)}>
          Get forecast
        </button>
      </div>
    </>
  );
};
