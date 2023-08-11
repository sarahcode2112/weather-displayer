import { type WeatherResponse } from "../types/types";

export const getHourlyForecastByDay = (
  response: WeatherResponse,
  day: number,
): Array<{ datetime: string; temp: string }> | null => {
  return response.days[day]?.hours;
};
