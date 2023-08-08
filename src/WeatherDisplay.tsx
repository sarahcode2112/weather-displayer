import { HourlyForecast } from "./HourlyForecast"
import { formatResponse, getHourlyForecastByDay } from "./helpers"
import { Response } from "./types"

export const WeatherDisplay = ({ response }: { response: Response }) => { 
  const todayHourlyForecast = getHourlyForecastByDay(response, 0)
  const tomorrowHourlyForecast = getHourlyForecastByDay(response, 1)
  console.log('response', response)
  
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

