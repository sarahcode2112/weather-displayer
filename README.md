This is Weather Request, an app for viewing a weather forecast in any city or town.

## Features

- Search functionality to find weather forecasts for specific cities/towns.
- Display of current one-sentence weather description, and temperature.
- Choice of metric or imperial unit groups.
- Clear and intuitive user interface.

## Usage

How to use the app:

- Enter the name of a city or town in the search bar.
- Slide the unit toggle button to choose metric or imperial units. (Sometimes this changes the forecast text as well.) 
- Click the "Get forecast" button.
- View the weather forecast displayed on the screen.

## How to install, run and test the app locally

To install the app, you can run:

### `npm install`

To run the app, you can run:

### `npm start`

View the app at [http://localhost:3000](http://localhost:3000) in a web browser.

To run tests, you can run:

### `npm test`

## Setting Up the API

The Weather Request app relies on an external weather API to provide forecasts. To set up the API connection, follow these steps:

1. **Sign Up and Get API Key**: Visit the [Weather API Provider's Website](https://www.visualcrossing.com/sign-up) and sign up for an account. Once you're signed up, you'll be able to access your API key.

2. **Configure API Key**: After obtaining your API key, create a `.env` file in the root directory of your app. Use the provided `env.template` file as a starting point. Replace `YOUR_API_KEY_HERE` with your actual API key.

3. **API Documentation**: Optionally, you can read the [API Documentation](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) to understand the available endpoints and how the Weather Request app structures its request.

## Debugging

To help with debugging, you can view the full API response on the web page by adding this div to a frontend component, such as WeatherDisplay:

<div>
    {/* Full response: {JSON.stringify(response)} */}
    {/* display response data as string */}
</div>

## Contact

For questions or feedback, you can reach out to [swarrencode@gmail.com](mailto:swarrencode@gmail.com) or visit [my GitHub profile](https://github.com/sarahcode2112).

## Credits

This app was started with create-react-app.
Website icon by GOWI.
Thank you to Professor Samuel for lots of helpful feedback!