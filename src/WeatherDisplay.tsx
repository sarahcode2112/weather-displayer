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
          Quick forecast: {formatResponse(response.description)}
        </p>
        <div>
          <input type="checkbox" name="showToday" id="showToday" className="peer"></input>
          <div className="peer-checked:visible">
            <p>
              Today's hourly forecast: {
                todayHourlyForecast
              }
            </p>
          </div>
        </div>
        <p>
          Full response: {JSON.stringify(response)} 
          {/* display response data as string */}
        </p>
    </>
)
            }