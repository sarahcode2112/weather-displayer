import App from "../App";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test(`renders 'Today by the hour' title`, () => {
  render(<App />);
  const hourlyForecastElement = screen.getByText(/Today by the hour/i);
  expect(hourlyForecastElement).toBeInTheDocument();
});

test(`renders 'Forecast:' title`, () => {
  render(<App />);
  const forecastElement = screen.getByText(/Forecast:/i);
  expect(forecastElement).toBeInTheDocument();
});

test('Renders "Berlin, Deutschland" after typing "Berlin" and clicking "Get forecast" button', async () => {
  render(<App />);

  jest.setTimeout(10000);

  const locationInput = screen.getByPlaceholderText("City or town name");
  const getForecastButton = screen.getByText("Get forecast");

  // User enters "Berlin" in the location search box
  fireEvent.change(locationInput, { target: { value: "Berlin" } });

  // User clicks the "Get Forecast" button
  fireEvent.click(getForecastButton);

  // Assert that the element with the text "Berlin, Deutschland" appears in the document, after waiting for it to appear
  const forecastElement = await waitFor(
    () => screen.getByText(/Berlin, Deutschland/),
    { timeout: 10000 },
  );
  expect(forecastElement).toBeInTheDocument();
});
