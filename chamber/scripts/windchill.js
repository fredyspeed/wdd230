// wind chill factor

// select HTML elements in the document
//const currentHumidity = document.querySelector('#current-humidity');
// value of temperature is in fahrenheit grades for now is fix 
let temperature = 40;
// value for wind speed is in mph for now is fix
let speed = 5;

//const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Veracruz&units=imperial&appid=361dfed55b656f30c52e218031a83655';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function converison_Farenheit_Celsius(temp) {
    return (temp - 32) * 5 / 9;
};


function displayResults(weatherData) {
    //    currentHumidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    // value of temperature is in fahrenheit grades for now is fix 
    let temperature = weatherData.main.temp.toFixed(0);
    // value for wind speed is in mph for now is fix
    let speed = weatherData.wind.speed.toFixed(0);
    const weatherIcon = document.querySelector('#weather_imagen');
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    let desc_capitalize = desc.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc_capitalize);
    weatherIcon.setAttribute('width', "115px");
    weatherIcon.setAttribute('height', "25px" );
    //    captionDesc.textContent = desc_capitalize;

    wind_chill_factor = 0;
    chill_factor_celsius = 0;
    message_chill_factor = "";

    if (temperature <= 50 && speed > 3) {
        wind_chill_factor = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
        console.log(wind_chill_factor);
        chill_factor_celsius = (converison_Farenheit_Celsius(wind_chill_factor)).toFixed(1);
        console.log(chill_factor_celsius);
        message_chill_factor = chill_factor_celsius + " k/h";
    } else {
        message_chill_factor = "N/A";
    }


    temperature_celsius = (converison_Farenheit_Celsius(temperature)).toFixed(1);

    const speed_k_h = (speed * 1.609344).toFixed();

    const weather_temp = document.querySelector("#weather_temperature");
    weather_temp.firstChild.innerHTML = temperature_celsius + "&deg;C";
    console.log(temperature_celsius + " this is &deg;C");
    console.log(" velocidad " + speed);
    const wind_speed_kh = document.querySelector("#wind_speed_span");
    wind_speed_kh.innerHTML = speed_k_h + " k/p";

    const wind_chill = document.querySelector("#wind_chill_span");
    console.log("message: " + message_chill_factor);
    wind_chill.innerHTML = message_chill_factor;

    //wind_chill_span


}

apiFetch();











