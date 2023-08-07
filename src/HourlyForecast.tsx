import { formatSingleDateTime } from './helpers';

export const HourlyForecast = ({ todayHourlyForecast }) => {
  return (
    <>
        <div className="weatherDescription">By the hour:</div>
        {todayHourlyForecast[1] && (
          <>
            {todayHourlyForecast.map((hour) => (
              <div>
                <div key={hour.datetime} className="hourlyForecastRow">
                  {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
                </div>
              </div>
            ))}
          </>
        )}
    </>
  );
};
