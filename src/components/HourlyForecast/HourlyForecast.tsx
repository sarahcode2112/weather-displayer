import React from "react";
import { HourlyForecastRows } from "./HourlyForecastRows";

export const HourlyForecast: React.FC = ({
  todayHourlyForecast,
  tomorrowHourlyForecast,
}) => (
  <div className="flex flex-wrap sm:flex-no-wrap">
    <div className="weatherDescription w-full sm:w-1/2 p-4">
      Today by the hour:
      {todayHourlyForecast[1] && (
        <HourlyForecastRows hourlyForecast={todayHourlyForecast} />
      )}
    </div>
    <div className="weatherDescription w-full sm:w-1/2 p-4">
      Tomorrow by the hour:
      {tomorrowHourlyForecast[1] && (
        <HourlyForecastRows hourlyForecast={tomorrowHourlyForecast} />
      )}
    </div>
  </div>
);
