import { useState } from "react";
import ".//styles/global-styles.css";
import { WeatherResponse } from "./types";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { WeatherRequest } from "./components/WeatherRequest";

const App = () => {
  const [response, setResponse] = useState<WeatherResponse>({
    resolvedAddress: "",
    description: "",
    days: [{ hours: [{ datetime: "", temp: "" }] }, { hours: [{ datetime: "", temp: "" }] }],
  });

  const updateResponse = (response: WeatherResponse) => {
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
