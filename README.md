# Weather Request

Weather Request displays a an hourly forecast in any city or town searched by the user, in metric or imperial units. The app is currently [deployed at Vercel](https://weather-displayer-eta.vercel.app/).
I built the app to learn more about React state management, clean code, testing, UI, deployment, and API calls.

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

## Tech stack

This project uses:
- React (built with create-react-app) with Typescript for the foundation
- Tailwind for styling
- Jest for testing 
- eslint/prettier for linting
- Vercel for deployment

## Installation, Local Setup, and Testing

To install the app, you can clone the github repository to your local machine. Navigate to the folder where you want the project to exist, and then run this command:

`git clone https://github.com/sarahcode2112/weather-displayer.git`

Then navigate to the project directory and run in the command line:

```
cd weather-displayer
npm install
```

To run the app, you can run in the command line:

`npm start`

Then you can view the app at [http://localhost:3000](http://localhost:3000) in a web browser.

To run tests, you can run in the command line:

`npm test`

## Setting Up the API

The Weather Request app relies on an external weather API to provide forecasts. For free, you can make up to 1000 requests per day. To set up the API, follow these steps:

1. **Sign Up and Get API Key**: Visit the [Weather API Provider's Website](https://www.visualcrossing.com/sign-up) and sign up for an account. Once you're signed up, you'll be able to access your API key.

2. **Configure API Key**: After obtaining your API key, create a `.env` file in the root directory of your app. Use the provided `env.template` file as a starting point. Replace `YOUR_API_KEY_HERE` with your actual API key.

3. **API Documentation**: Optionally, you can read the [API Documentation](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) to understand the available endpoints and how the Weather Request app structures its request.

## Deploy the app

This section explains how to deploy the Weather Request app on Vercel. Before you begin, make sure you have a Vercel account. If you don't have one, you can sign up at [Vercel's website](https://vercel.com/).

### Step 1: Push to GitHub

To enable automatic deployment with Vercel, I recommend pushing your app to a remote Git repository on GitHub.

Create a new repository on GitHub for your version of the Weather Request app if you haven't already.

### Step 2: Deploy with Vercel

On your [Vercel account dashboard](https://vercel.com/dashboard), Click 'Add New', then 'Project,' then import your existing GitHub repository for your version of Weather Request.

Vercel will automatically detect the GitHub repository. Choose the default settings or customize them as desired. 

One important step is to set up the API key using the Vercel dashboard (because Vercel will not read the API key in your .env file, which is gitignored). Go to your app's settings on the Vercel website and navigate to the "Environment Variables" section. Add your API key there.

Once the deployment process is complete, Vercel will provide you with a URL where your app is live, where you can visit the site.Vercel will automatically handle continuous deployment. Whenever you push changes to your linked GitHub repository, Vercel will build and deploy the updated app.

## Debugging

To help with debugging, you can view the full API response on the web page by adding this div to a frontend component, such as WeatherDisplay.tsx:

```
<div>
    {/* Full response: {JSON.stringify(response)} */}
    {/* display response data as string */}
</div>
```

## Contact

For questions or feedback, you can reach out to [swarrencode@gmail.com](mailto:swarrencode@gmail.com) or visit [my GitHub profile](https://github.com/sarahcode2112).

## Credits

- This app was started with create-react-app.
- Website icon by GOWI.
- Thank you to [Visual Crossing](visualcrossing.com) for providing free weather data.
- Thank you to Professor Samuel for lots of helpful feedback!