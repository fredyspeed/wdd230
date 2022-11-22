// select HTML elements in the document
//const currentHumidity = document.querySelector('#current-humidity');
const currentWindSpeed = document.querySelector('#wind_speed_span');
const currentTemp = document.querySelector('#weather_temperature');
const weatherIcon = document.querySelector('#weather_imagen');
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

function displayResults(weatherData) {
//    currentHumidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong> &deg;C`;
    currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    let desc_capitalize = desc.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc_capitalize);
//    captionDesc.textContent = desc_capitalize;

}

apiFetch();