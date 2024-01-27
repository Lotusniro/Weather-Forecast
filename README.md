# Weather-Forecast
This is a  Weather forecast app.

## Description
This is a weather forecast app that allows the user to search for a city and get the current weather and a 5 day forecast. The user can also click on a city in the search history to get the current weather and 5 day forecast for that city. The current weather includes the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed. The 5 day forecast includes the date, an icon representation of weather conditions, the temperature, and the humidity. The search history is saved in local storage.

- I got my api key from https://openweathermap.org/api

- when form is submitted, the city name is added to the search history and the current weather and 5 day forecast for that city is displayed.
- for history purpose i stored the city name in local storage.
- when a city in the search history is clicked, the current weather and 5 day forecast for that city is displayed.
- when user enter the city data will be fetched
- first fetch the latitude and longitude of the city
- then find the weather data using the latitude and longitude of the city




- fetchweather function is used to fetch the weather data from the api.
  ![screen
](https://github.com/Lotusniro/Weather-Forecast/blob/main/starter/screenshots/Screenshot%202024-01-27%20at%2010.26.51.png)
- displayweather function is used to display the weather data on the page,if the fetch is successful.
  ![screen
](https://github.com/Lotusniro/Weather-Forecast/blob/main/starter/screenshots/Screenshot%202024-01-27%20at%2010.27.17.png)
- data list is looped through to get the data for the 5 day forecast.
- 8 is data points given every 3 hours for 5 days.
- displayforecast function is used to display the 5 day forecast and current day forecast on the page,if the fetch is successful.
  ![screen
](https://github.com/Lotusniro/Weather-Forecast/blob/main/starter/screenshots/Screenshot%202024-01-27%20at%2010.27.56.png)- getlatlon function is used to get the latitude and longitude of the city and weather data is fetched using the latitude and longitude.


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
- Clone the repository
- Open index.html in browser

## Usage
- Enter a city name in the search box and click the search button.

## Credits
- https://openweathermap.org/api
- day.js
- bootstrap
- jquery
- Teachers

## License
MIT License

## url
![one
](https://github.com/Lotusniro/Weather-Forecast)https://github.com/Lotusniro/Weather-Forecast


![two
](https://lotusniro.github.io/Weather-Forecast/)https://lotusniro.github.io/Weather-Forecast/

