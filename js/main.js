
let locationInput = document.getElementById('location');

let data = [];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


async function getData(city){

let respose =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e75e227ce6ef4d53a34132818241001&q=${city}&days=3`);

let lastResponse = await respose.json();

data = lastResponse;

 displayCurrentWeather();

 displayFirstForecast();

 displaySecondForecast();
}

getData('cairo');


function displayCurrentWeather(){

    let d = new Date(data.forecast.forecastday[0].date);
    let date = days[d.getDay()];
    
    let day = d.getDate();

    const m = new Date(data.forecast.forecastday[0].date);
    let month = months[m.getMonth()];

    let weatherData = `<div class="card rounded-end-0 first-day text-white h-100">

    <div class="header">
      <div><span>${date}</span></div>
      <div><span>${day + month}</span></div>
    </div>
    
    <div class="card-body">
    
      <h5 class="title">${data.location.name}</h5>
      <div class="degree">
        <span>${data.current.temp_c}<sup>o</sup>C</span>
        <img src='https:${data.current.condition.icon}' alt="weather-img">
      </div>
      <div class="desc">
        <span>${data.current.condition.text}</span>
      </div>
    
      <div class="icons">
        <div>
          <img src="imgs/icon-umberella.png">
          <span>20%</span>
        </div>
    
        <div>
          <img src="imgs/icon-wind.png">
          <span>18km/h</span>
        </div>
    
        <div>
          <img src="imgs/icon-compass.png">
          <span>East</span>
        </div>
    
      </div>
    
    </div>
    
    </div>`;

    document.getElementById('weather').innerHTML = weatherData;

}

function displayFirstForecast(){

    let d = new Date(data.forecast.forecastday[1].date);
    let day = days[d.getDay()];

    let firstForecast = ` <div class="card rounded-0 text-center second-day text-white h-100">

    <div class="header">
      <div><span>${day}</span></div>
    </div>
    
    <div class="card-body">
    
      <div class="forecast-content">
        <img src='https:${data.forecast.forecastday[1].day.condition.icon}' alt="forecast-img" width="15%">
        <div class="forecast-degree">
          <span>${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</span>
        </div>
        <div class="small-forecast">
          <small>${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
        </div>
    
        <div class="desc">
          <span>${data.forecast.forecastday[1].day.condition.text}</span>
        </div>
      </div>
    
    </div>
    </div>`

    document.getElementById('firstForecast').innerHTML = firstForecast;
    
}

function displaySecondForecast(){

    const d = new Date(data.forecast.forecastday[2].date);

    let day = days[d.getDay()];


    let secondForecast = `<div class="card rounded-start-0 text-center third-day text-white h-100">

    <div class="header">
      <div><span>${day}</span></div>
    </div>
    
    <div class="card-body">
    
      <div class="forecast-content">
        <img src='https:${data.forecast.forecastday[2].day.condition.icon}' alt="forecast-img" width="15%">
        <div class="forecast-degree">
          <span>${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</span>
        </div>
        <div class="small-forecast">
          <small>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
        </div>
    
        <div class="desc">
          <span>${data.forecast.forecastday[2].day.condition.text}</span>
        </div>
    
      </div>
    
    </div>
    </div>`

    document.getElementById('secondForecast').innerHTML = secondForecast;




}


locationInput.addEventListener('input', function(){
    let search =  locationInput.value;
    getData(search);
})


