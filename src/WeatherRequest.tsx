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
    setUnitGroup(event.target.checked ? "us" : "metric");
  };

  return (
    <>
      <div>
        <label htmlFor="unitGroup">American/Metric</label>
        <input
          id="unitGroup"
          type="checkbox"
          onChange={updateUnitGroup}
          value={unitGroup}
        ></input>
      </div>
      <div>
        <input
          placeholder="city name"
          onChange={updateCity}
          value={city}
        ></input>
        <button onClick={() => getWeather(city, unitGroup, updateResponse)}>
          Get weather
        </button>
      </div>
    </>
  );
};