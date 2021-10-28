/*  Link JS to HTML
1 get access to input field
 b) get access to button (make button pleaseee)
2. create function to fetch api data when button is clicked
3.
*/

var inputField = document.querySelector("#city")
var button = document.querySelector("#getWeather")

    
// var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
function fetchData() {
    var cityName=inputField.value
    var apiKey = "f30dc0b71f772a037a522282770190be"
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    // console.log(requestUrl)

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(weatherData){
        console.log(weatherData)
    })
}
button.addEventListener("click", fetchData)