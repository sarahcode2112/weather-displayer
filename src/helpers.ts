export const formatResponse = (responseDatum: string | string[] | string[][]) => JSON
    .stringify(responseDatum)
    .replace(/['"]+/g, '');

export const getHourlyForecastByDay = (response, day: number) => { return formatResponse(response.days[day].hours.map((hour) => [ hour.datetime, hour.temp ]))
}