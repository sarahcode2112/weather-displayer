import React from "react";
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { getHourlyForecastByDay } from "../utils/getHourlyForecastByDay";
import { formatResponse } from "../utils/formatters";
import type { Hours, WeatherDisplayProps } from "../types/types";

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ response }) => {
  const todayHourlyForecast: Hours = getHourlyForecastByDay(response, 0);
  const tomorrowHourlyForecast: Hours = getHourlyForecastByDay(response, 1);

  return (
    <>
      <div className="weatherDescription">
        Location: {formatResponse(response.resolvedAddress)}
      </div>
      <div className="weatherDescription">
        Forecast: {formatResponse(response.description)}
      </div>
      <HourlyForecast
        todayHourlyForecast={todayHourlyForecast}
        tomorrowHourlyForecast={tomorrowHourlyForecast}
      ></HourlyForecast>
    </>
  );
};
