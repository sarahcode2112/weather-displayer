export interface WeatherResponse {
  resolvedAddress: string;
  description: string;
  days: Array<{ hours: Array<{ datetime: string; temp: string }> }>;
}

export interface WeatherRequestProps {
  updateResponse: (response: WeatherResponse) => void;
}
