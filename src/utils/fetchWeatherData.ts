import { type WeatherResponse } from "../types/types";

export const fetchWeatherData = (
  city: string,
  unitGroup: string,
  updateResponse: (response: WeatherResponse) => void,
): void => {
  const apiKey = process.env.REACT_APP_API_KEY;
  fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&key=${apiKey}&contentType=json`,
  )
    .then(async (res) => await res.json()) // parse response data into JavaScript object
    .then((objectRes: WeatherResponse) => {
      updateResponse(objectRes);
    }) // save response data in response object
    .catch((error) => {
      alert(
        "The weather request did not work. Did you type a city name (without typos)?",
      );
      console.log(error);
    });
};
