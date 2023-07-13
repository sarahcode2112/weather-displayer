export const getWeather = (city: string) => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GTK8Z96XLPV5HJ3KGXK5E9JP7&contentType=json`)
        .then((res) => res.json()) // parse response into JavaScript object
        .then((jsonRes) => alert(JSON.stringify(jsonRes))) // display the stringified data in an alert
        .then((stringifiedRes) => stringifiedRes) // return the stringified data if we want to use it
        .catch((error) => {
            alert('The weather request did not work. Did you remember to type a city name without typos?');
            console.log(error)
        }
    )
}