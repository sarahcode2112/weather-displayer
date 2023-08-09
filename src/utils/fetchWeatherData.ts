export const fetchWeatherData = (city: string, unitGroup: string, updateResponse: (stringifiedRes: any) => void) => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&key=GTK8Z96XLPV5HJ3KGXK5E9JP7&contentType=json`)
        .then((res) => res.json()) // parse response data into JavaScript object
        .then((objectRes: object) => updateResponse(objectRes)) // save response data in response object
        .catch((error) => {
            alert('The weather request did not work. Did you type a city name (without typos)?');
            console.log(error)
        }
    )
}