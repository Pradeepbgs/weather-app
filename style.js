
const weatherDataEl = document.getElementById('weather-data');

const cityInputEl = document.getElementById('city-input');

function formEl(event){
        event.preventDefault();
        const cityValue = cityInputEl.value;
        getWeatherData(cityValue);
}

 function getWeatherData(cityValue){
        const apikey = '5b67e98277c69bf4f774ba0547c63238';
        const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`;
        try {
              fetch(apiurl).then(response => response.json()).then(data=>   {  
                        const temperature = data.main.temp;
                        const description = data.weather[0].description;
             const icon = data.weather[0].icon;

             const details = [
                `feels like: ${data.main.feels_like}`,
                `humidity: ${data.main.humidity}%`,
                `wind speed: ${data.wind.speed} m/s`
             ]
             
             weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="">`;

             weatherDataEl.querySelector('.temperature').textContent = `${temperature}°C`;

             weatherDataEl.querySelector('.description').textContent = `${description}`;

             weatherDataEl.querySelector('.details').innerHTML = details.map((details)=> `<div>${details}</div>`).join(''); //we have use join to cut ,,(coma);
        })
        } catch (error) {
                console.error('Error', error)
        }
}
