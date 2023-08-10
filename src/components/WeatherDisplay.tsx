import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { getHourlyForecastByDay } from "../utils/getHourlyForecastByDay";
import { formatResponse } from "../utils/formatters";
import type { WeatherResponse } from "../types/types";

export const WeatherDisplay = ({ response }: { response: WeatherResponse }) => { 
  const todayHourlyForecast = getHourlyForecastByDay(response, 0)
  const tomorrowHourlyForecast = getHourlyForecastByDay(response, 1)
  
  return (
    <>
      <div className="weatherDescription">
        Location: {formatResponse(response.resolvedAddress)}
      </div>
      <div className="weatherDescription">
        Forecast: {formatResponse(response.description)}
      </div>
      <HourlyForecast todayHourlyForecast={todayHourlyForecast} tomorrowHourlyForecast={tomorrowHourlyForecast}></HourlyForecast>
      <div>
        {/* Full response: {JSON.stringify(response)}   */}
        {/* display response data as string */}
      </div>
    </>
  )
}

