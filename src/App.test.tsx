// import React from 'react';
import App from './App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

test(`renders Today's hourly forecast title`, () => {
  render(<App />);
  const hourlyForecastElement = screen.getByText(/Today's hourly forecast/i);
  expect(hourlyForecastElement).toBeInTheDocument();
});

test(`renders Quick forecast title`, () => {
  render(<App />);
  const quickForecastElement = screen.getByText(/Quick forecast/i);
  expect(quickForecastElement).toBeInTheDocument();
});

test('Renders "Berlin, Deutschland" after clicking "Get weather" button', async () => {
  render(<App />);

  jest.setTimeout(10000)

  const locationInput = screen.getByPlaceholderText('city name');
  const getForecastButton = screen.getByText('Get weather');

  // User enters "Berlin" in the location search box
  fireEvent.change(locationInput, { target: { value: 'Berlin' } });

  // User clicks the "Get Forecast" button
  fireEvent.click(getForecastButton);

  // Assert that the element with the text "Berlin, Deutschland" appears in the document, after waiting for it to appear
  const forecastElement = await waitFor(() => screen.getByText(/Berlin, Deutschland/), { timeout: 10000});
  expect(forecastElement).toBeInTheDocument();
});