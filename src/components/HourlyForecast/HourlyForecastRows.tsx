import React from "react";
import { formatSingleDateTime } from "../../utils/formatters";
import { type Hours } from "../../types/types";

export const HourlyForecastRows: React.FC<{ hourlyForecast: Hours }> = ({
  hourlyForecast,
}) => {
  const rowsPerColumn = 12;

  return (
    <div className="hourly-forecast-container">
      <div className="hourly-forecast-columns">
        <div className="hourly-forecast-column">
          {hourlyForecast.slice(0, rowsPerColumn).map((hour) => (
            <div key={hour.datetime} className="hourlyForecastRow">
              {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
            </div>
          ))}
        </div>
        <div className="hourly-forecast-column">
          {hourlyForecast.slice(rowsPerColumn).map((hour) => (
            <div key={hour.datetime} className="hourlyForecastRow">
              {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};