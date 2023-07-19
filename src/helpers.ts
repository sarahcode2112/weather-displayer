import { Response } from "./types"

export const formatResponse = (responseDatum: string | string[] | string[][]) => JSON
    .stringify(responseDatum)
    .replace(/['"]+/g, '');

export const getHourlyForecastByDay = (response: Response, day: number) => {
    if (response.days[day] && response.days[day].hours) {
      return formatResponse(
        response.days[day].hours.map((hour: { datetime: string; temp: string; }) => [hour.datetime, hour.temp])
      );
    } else {
      return '';
    }
  };

