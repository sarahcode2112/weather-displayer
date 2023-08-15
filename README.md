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

The Weather Request app relies on an external weather API to provide forecasts. For free, you can make up to 1000 requests per day. To set up the API, follow these steps:

1. **Sign Up and Get API Key**: Visit the [Weather API Provider's Website](https://www.visualcrossing.com/sign-up) and sign up for an account. Once you're signed up, you'll be able to access your API key.

2. **Configure API Key**: After obtaining your API key, create a `.env` file in the root directory of your app. Use the provided `env.template` file as a starting point. Replace `YOUR_API_KEY_HERE` with your actual API key.

3. **API Documentation**: Optionally, you can read the [API Documentation](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/) to understand the available endpoints and how the Weather Request app structures its request.

## Deploy the app

This section will guide you through deploying the Weather Request app on Vercel.

Before you begin, make sure you have a Vercel account. If you don't have one, you can sign up at [Vercel's website](https://vercel.com/).

### Step 1: Push to GitHub

To enable automatic deployment with Vercel, we recommend pushing your app to a remote Git repository on GitHub.

Create a new repository on GitHub for your Weather Request app if you haven't already.

Clone your app's repository to your local machine:

`git clone https://github.com/your-username/your-repo-name.git`

Navigate to your app's root directory:

`cd your-repo-name`

Copy your environment variables template into a new .env file:

`cp env.template .env`
Edit the .env file and replace YOUR_API_KEY_HERE with your actual API key, as described in the API section of the Readme.

Add, commit, and push your changes to GitHub:

```
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy with Vercel

On your [Vercel account dashboard](https://vercel.com/dashboard), Click 'Add New', then 'Project,' then import your existing GitHub repository for Weather Request.

Vercel will automatically detect your GitHub repository. Choose the default settings or customize them as desired. 

Environment Variables in Vercel:
Set up the API key using the Vercel dashboard. Go to your app's settings on Vercel and navigate to the "Environment Variables" section. Add your API key there.

Once the deployment process is complete, Vercel will provide you with a URL where your app is live. You can access your app by visiting this URL.

Note: Vercel will automatically handle continuous deployment. Whenever you push changes to your linked GitHub repository, Vercel will build and deploy the updated app.

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