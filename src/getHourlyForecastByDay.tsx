import { Response } from "./types"

export const getHourlyForecastByDay = (response: Response, day: number): { datetime: string; temp: string; }[] | null => {
    if (response.days[day] && response.days[day].hours) {
      return response.days[day]?.hours
    } else {
      return null;
    }
  };