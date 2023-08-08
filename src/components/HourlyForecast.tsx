import { formatSingleDateTime } from '../utils/formatters';

export const HourlyForecast = ({ todayHourlyForecast, tomorrowHourlyForecast }) => {
  return (
    <>
        <div className="weatherDescription">Today by the hour:</div>
        {todayHourlyForecast[1] && (
          <>
            {todayHourlyForecast.map((hour) => (
              <div key={hour.datetime}>
                <div className="hourlyForecastRow">
                  {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
                </div>
              </div>
            ))}
          </>
        )}
        <div className="weatherDescription">Tomorrow by the hour:</div>
        {tomorrowHourlyForecast[1] && (
          <>
            {tomorrowHourlyForecast.map((hour) => (
              <div key={hour.datetime}>
                <div className="hourlyForecastRow">
                  {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
                </div>
              </div>
            ))}
          </>
        )}
    </>
  );
};
