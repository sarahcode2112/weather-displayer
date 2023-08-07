import { formatSingleDateTime } from './helpers';

export const ToggleDropdown = ({ todayHourlyForecast }) => {
  return (
    <>
        <div>
          {todayHourlyForecast[1] && (
            <>
              <div>By the hour:</div>
              {todayHourlyForecast.map((hour) => (
                <div key={hour.datetime}>
                  {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
                </div>
              ))}
            </>
          )}
        </div>
    </>
  );
};
