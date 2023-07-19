import { useState } from "react";
import "./App.css";
import { Response } from "./types";
import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherRequest } from "./WeatherRequest";

const App = () => {
  const [response, setResponse] = useState<Response>({
    resolvedAddress: "",
    description: "",
    days: [{ hours: [{ datetime: "", temp: "" }] }],
  });

  const updateResponse = (response: Response) => {
    setResponse(response);
  };

  return (
    <>
      <WeatherRequest updateResponse={updateResponse} />
      <WeatherDisplay response={response} />
    </>
  );
};

export default App;
