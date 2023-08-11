import { type Hours, type WeatherResponse } from "../types/types";

export const getHourlyForecastByDay = (
  response: WeatherResponse,
  day: number,
): Hours => {
  return response.days[day]?.hours;
};
