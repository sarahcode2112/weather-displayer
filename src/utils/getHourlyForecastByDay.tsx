import { WeatherResponse } from "../types/types"

export const getHourlyForecastByDay = (response: WeatherResponse, day: number): { datetime: string; temp: string; }[] | null => {
    if (response.days[day] && response.days[day].hours) {
      return response.days[day]?.hours
    } else {
      return null;
    }
  };