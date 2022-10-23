// wind chill factor
// value of temperature is in fahrenheit grades for now is fix 
const temperature = 40;
// value for wind speed is in mph for now is fix
const speed = 5;

wind_chill_factor = 0;
if (temperature <=50 && speed > 3 ){
    wind_chill_factor = 35.74 + (0.6215 * temperature ) - (35.75 * (speed ^0.16))+ (0.4275 * temperature * (speed ^0.16));
}else {
    wind_chill_factor = "N/A";
}

