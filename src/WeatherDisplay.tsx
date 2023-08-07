import { ToggleDropdown } from "./ToggleDropdown"
import { formatResponse, getHourlyForecastByDay } from "./helpers"
import { Response } from "./types"

export const WeatherDisplay = ({ response }: { response: Response }) => { 
  const todayHourlyForecast = getHourlyForecastByDay(response, 0)

  const tomorrowHourlyForecast = getHourlyForecastByDay(response, 1)
  
  return (
    <>
        <p>
          Location: {formatResponse(response.resolvedAddress)}
        </p>
        <p>
          Forecast: {formatResponse(response.description)}
        </p>
        <ToggleDropdown todayHourlyForecast={todayHourlyForecast}></ToggleDropdown>
        <p>
          {/* Full response: {JSON.stringify(response)}   */}
          {/* display response data as string */}
        </p>
    </>
)
}

