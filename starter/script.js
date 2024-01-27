
let myKey = "e498f43367bb9894c06adc7cd825a27d";

// Function to fetch weather data
function fetchWeather(lat, lon) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;
 fetch(apiUrl)
 .then((response)=>{return response.json()})
 .then((data)=>{console.log(data)
  displayWeather(data)})
  .catch((error)=>{console.log(error)})
}

// Function to display weather data
function displayWeather(data) {
  // Clear previous data
  const todayElement = document.getElementById('today');
  const forecastElement = document.getElementById('forecast');
  todayElement.innerHTML = '';
  forecastElement.innerHTML = '';

  // Display today's weather
  let todayWeather = `<div class='today-weather'>
                        <h1> ${data.city.name}</h1>
                        <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png" alt="weather icon">
                        <h3>${dayjs().format('DD/MM/YYYY')}</h3>
                        <p>Temperature: ${data.list[0].main.temp} °C</p>
                        <p>wind: ${data.list[0].wind.speed} m/s</p>
                        <p>Humidity:${data.list[0].main.humidity} %</p>
                      </div>`;
  todayElement.innerHTML = todayWeather;

  // Display 5-day forecast
  for (let i = 0; i < data.list.length; i += 8) {
    //8 means 3 hours * 8 = 24 hours = 1 day /8 intervals
   let dayWeather = `<div class='col forecast-day'>
                        <h3>${dayjs(data.list[i].dt_txt).format('DD/MM/YYYY')}</h3>
                        <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png" alt="weather icon">

                        <p>Temperature: ${data.list[i].main.temp} °C</p>
                        <p>wind: ${data.list[i].wind.speed} m/s</p>
                        <p>Humidity:${data.list[i].main.humidity} %</p>
                      </div>`;
    forecastElement.innerHTML += dayWeather;
  }
}

//function to get city's latitude and longitude

function getCityLatLon(city) {
  let geocodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${myKey}`;
  fetch(geocodingApiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        fetchWeather(data[0].lat, data[0].lon);
      } else {
        alert("City not found.");
      }
    })
    .catch(() => alert("Error getting city data."));
}

// Event handler for search button

let searchform =$("#search-form");
searchform.on("submit", function(e){
  e.preventDefault();
  let city = $("#search-input").val();
  //save city to local storage
  localStorage.setItem("city", city);

  //get city from local storage when page loads
  let cityFromLocalStorage = localStorage.getItem("city");
 //create a list and append to the search history
  let btn = $("<button>").text(cityFromLocalStorage);
  btn.addClass("btn btn-outline-secondary btn-block");
  $("#history").append(btn);

//when the button is clicked, get the city name and fetch the weather
  btn.on("click", function(){
    let city = $(this).text();
    getCityLatLon(city);
  });






  getCityLatLon(city);
});
