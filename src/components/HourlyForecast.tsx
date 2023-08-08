import { formatSingleDateTime } from '../utils/formatters';

export const HourlyForecast = ({ todayHourlyForecast, tomorrowHourlyForecast }) => {
  return (
    <div className="flex flex-wrap sm:flex-no-wrap">
        <div className="weatherDescription w-full sm:w-1/2 p-4">Today by the hour:
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
        </div>
        <div className="weatherDescription w-full sm:w-1/2 p-4">Tomorrow by the hour:
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
        </div>
    </div>
  );
};
