export interface WeatherResponse {
  resolvedAddress: string;
  description: string;
  days: Array<{ hours: Array<{ datetime: string; temp: string }> }>;
}

interface HourData {
  datetime: string;
  temp: string;
}

export type Hours = HourData[];

export interface WeatherRequestProps {
  updateResponse: (response: WeatherResponse) => void;
}

export interface WeatherDisplayProps {
  response: WeatherResponse;
}
