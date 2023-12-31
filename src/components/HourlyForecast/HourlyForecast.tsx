/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { HourlyForecastRows } from "./HourlyForecastRows";
import { type Hours } from "../../types/types";

export const HourlyForecast: React.FC<{
  todayHourlyForecast: Hours;
  tomorrowHourlyForecast: Hours;
}> = ({ todayHourlyForecast, tomorrowHourlyForecast }) => (
  <div className="flex flex-wrap sm:flex-no-wrap">
    <div className="weatherDescriptionText w-full sm:w-1/2 p-4">
      Today by the hour:
      {todayHourlyForecast[1] && (
        <HourlyForecastRows hourlyForecast={todayHourlyForecast} />
      )}
    </div>
    <div className="weatherDescriptionText w-full sm:w-1/2 p-4">
      Tomorrow by the hour:
      {tomorrowHourlyForecast[1] && (
        <HourlyForecastRows hourlyForecast={tomorrowHourlyForecast} />
      )}
    </div>
  </div>
);
