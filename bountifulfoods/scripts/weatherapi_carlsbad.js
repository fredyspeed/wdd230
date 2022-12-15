// select HTML elements in the document
const currentHumidity = document.querySelector('#current_humidity_span');
const currentWindSpeed = document.querySelector('#wind_speed_span');
const currentTemp = document.querySelector('#weather_temperature');
const weatherIcon = document.querySelector('#weather_imagen');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=361dfed55b656f30c52e218031a83655';

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

//pro.openweathermap.org
//const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&cnt=3&appid=361dfed55b656f30c52e218031a83655';
const url2 = 'https://pro.openweathermap.org/data/2.5/forecast/daily?lat=32.4207&lon=-104.2288&cnt=3&units=metric&appid=e9f788e96a97afedc8ce036e4b398420';

async function apiFetch2() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data_forecast = await response.json();
            console.log(data_forecast); // this is for testing the call
            forecast_display(data_forecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}




function displayResults(weatherData) {
    currentHumidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>%`;
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong> &deg;C`;
    currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong> km/h`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    let desc_capitalize = desc.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc_capitalize);
   captionDesc.textContent = desc_capitalize;
}

function forecast_display(data_forecast){
    
    const forecast_temp_one_day = document.querySelector('#one_day_forecast');
    const forecast_temp_two_day = document.querySelector('#two_day_forecast');
    const forecast_temp_three_day = document.querySelector('#three_day_forecast');
    forecast_temp_one_day.innerHTML = `<strong> day: ${data_forecast.list[0].temp.day.toFixed(0)}  min: ${data_forecast.list[0].temp.min.toFixed(0)} max: ${data_forecast.list[0].temp.max.toFixed(0)}</strong>`;
    forecast_temp_two_day.innerHTML = `<strong> day: ${data_forecast.list[1].temp.day.toFixed(0)}  min: ${data_forecast.list[1].temp.min.toFixed(0)} max: ${data_forecast.list[1].temp.max.toFixed(0)}</strong>`;
    forecast_temp_three_day.innerHTML = `<strong> day: ${data_forecast.list[2].temp.day.toFixed(0)}  min: ${data_forecast.list[2].temp.min.toFixed(0)} max: ${data_forecast.list[2].temp.max.toFixed(0)}</strong>`;


}

apiFetch();
apiFetch2();