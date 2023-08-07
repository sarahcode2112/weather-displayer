import { formatSingleDateTime } from './helpers';

export const ToggleDropdown = ({ todayHourlyForecast }) => {
  return (
    <>
        <div className="weatherDescription">By the hour:</div>
        {todayHourlyForecast[1] && (
          <>
            {todayHourlyForecast.map((hour) => (
              <div key={hour.datetime}>
                {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
              </div>
            ))}
          </>
        )}
    </>
  );
};
