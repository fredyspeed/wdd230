// wind chill factor
// value of temperature is in fahrenheit grades for now is fix 
const temperature = 40;
// value for wind speed is in mph for now is fix
const speed = 5;

wind_chill_factor = 0;
chill_factor_celsius = 0;


function  converison_Farenheit_Celsius(temp) {
    return ( temp - 32) * 5/9 ;
  };

message_chill_factor = "";

if (temperature <=50 && speed > 3 ){
    wind_chill_factor = 35.74 + (0.6215 * temperature ) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * temperature * Math.pow(speed,0.16));
    console.log(wind_chill_factor);
    chill_factor_celsius = (converison_Farenheit_Celsius(wind_chill_factor)).toFixed(1);
    console.log(chill_factor_celsius);
    message_chill_factor = chill_factor_celsius+" k/h";
}else {
    message_chill_factor = "N/A";
}


 temperature_celsius = (converison_Farenheit_Celsius(temperature)).toFixed(1); 

 const speed_k_h = (speed * 1.609344).toFixed();

 const weather_temp = document.querySelector("#weather_temperature");
 weather_temp.firstChild.innerHTML = temperature_celsius + "&deg;C";
 console.log(temperature_celsius + "&deg;C");
 const wind_speed_kh = document.querySelector("#wind_speed_span");
 wind_speed_kh.innerHTML = speed_k_h+ " k/p";
 
 const wind_chill = document.querySelector("#wind_chill_span");
 console.log("message: "+ message_chill_factor);
 wind_chill.innerHTML = message_chill_factor;

 //wind_chill_span

/*
<div id="first_line_weather">
                <h3 id="weather_title">Weather </h3>
                <div id="weather_imagen_temperature">   
                <img id="weather_imagen" src="images/weather_sun_cloud.jpg" alt="Weather">
            
                <p id="weather_temperature"><span>33&deg;C</span></p>
                </div> 
           </div>
           <div id="second_line_weather">
            <p id="cloudiness"> Partly Cloudy</p>
            <hr id="line_weather">
            <p id="wind_speed"><span>Wind Speed: </span> <span> </span> </p>
            <p id="wind_chill"> <span>Wind Chill: </span> <span> </span></p>
            </div>*/