import { formatSingleDateTime } from "../../utils/formatters";

export const HourlyForecastRows = ({ hourlyForecast }) => (
    <>
        {hourlyForecast.map((hour) => (
        <div key={hour.datetime}>
            <div className="hourlyForecastRow">
            {formatSingleDateTime(hour.datetime)}: {hour.temp}&deg;
            </div>
        </div>
        ))}
    </>
);