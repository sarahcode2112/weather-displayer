import React, { useState } from "react";
import { type WeatherResponse } from "./types/types";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { WeatherRequest } from "./components/WeatherRequest";

const App: React.FC = () => {
  const [response, setResponse] = useState<WeatherResponse>({
    resolvedAddress: "",
    description: "",
    days: [
      { hours: [{ datetime: "", temp: "" }] },
      { hours: [{ datetime: "", temp: "" }] },
    ],
  });

  const updateResponse = (response: WeatherResponse): void => {
    setResponse(response);
  };

  return (
    <div className="App">
      <WeatherRequest updateResponse={updateResponse} />
      <WeatherDisplay response={response} />
    </div>
  );
};

export default App;
