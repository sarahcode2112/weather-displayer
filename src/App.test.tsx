// import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test(`renders today's hourly forecast title`, () => {
  render(<App />);
  const hourlyForecastElement = screen.getByText(/Today's hourly forecast/i);
  expect(hourlyForecastElement).toBeInTheDocument();
});
