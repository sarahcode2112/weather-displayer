import { useState } from "react";
import ".//styles/App.css";
import { Response } from "./types";
import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherRequest } from "./WeatherRequest";

const App = () => {
  const [response, setResponse] = useState<Response>({
    resolvedAddress: "",
    description: "",
    days: [{ hours: [{ datetime: "", temp: "" }] }, { hours: [{ datetime: "", temp: "" }] }],
  });

  const updateResponse = (response: Response) => {
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
