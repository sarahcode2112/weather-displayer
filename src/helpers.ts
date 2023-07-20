import { Response } from "./types"

export const formatResponse = (responseDatum: string | string[] | string[][]) => JSON
    .stringify(responseDatum)
    .replace(/['"]+/g, '');

export const getHourlyForecastByDay = (response: Response, day: number): { datetime: string; temp: string; }[] | null => {
    if (response.days[day] && response.days[day].hours) {
      return response.days[day]?.hours
    } else {
      return null;
    }
  };

// export const getHourlyForecastByDay = (response: Response, day: number): { datetime: string; temp: string; }[] | null => {
//   if (response.days[day] && response.days[day].hours) {
//     return response.days[day].hours.map(
//       (hour: { datetime: string; temp: string; }) => 
//       hour
//       // [hour.datetime, ' ', hour.temp]
//     )
//   } else {
//     return null;
//   }
// };