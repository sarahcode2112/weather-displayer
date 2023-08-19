import { type WeatherResponse } from "../types/types";
import { baseUrl } from "./config";

const errorMessage =
  "The weather request did not work. Did you type a city or town name (without typos)?";

export const fetchWeatherData = (
  city: string,
  unitGroup: string,
  updateResponse: (response: WeatherResponse) => void,
): void => {
  const apiKey = process.env.REACT_APP_API_KEY;
  fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${baseUrl}${city}?unitGroup=${unitGroup}&key=${apiKey}&contentType=json`,
  )
    .then(async (res) => await res.json()) // parse response data into JavaScript object
    .then((objectRes: WeatherResponse) => {
      updateResponse(objectRes);
    }) // save response data in response object
    .catch((error) => {
      alert(errorMessage);
      console.log(error);
    });
};
