//Feature one, current date and time

let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = (months[now.getMonth()]);
let time = (`${now.getHours()}:${now.getMinutes()}`);
let currentDate = (`${day}, ${month} ${now.getDate()},`);

let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = `${currentDate} ${time}`;


//Feature 2, Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function getTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let precip = document.querySelector("#precip")
  let place = document.querySelector("#place");
  let city = response.data.name;
  let tempSign = document.querySelector("#temp");
  console.log(response);
  precip.innerHTML = response.data.weather[0].main;
  tempSign.innerHTML = `${temp}°`;
  place.innerHTML = city;

}


function changeCity(event) {
  event.preventDefault();
  let apiKey = "63214c4281922e3bb72fdf12dada7734";
  let unit = "units=metric";
  let city = document.querySelector("#enter-city-input");
  city = (city.value);
  let url = "https://api.openweathermap.org/data/2.5/weather?q=";
  axios.get(`${url}${city}&appid=${apiKey}&${unit}`).then(getTemp);
}


  

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);

//trying to update so i can push on github
//temperature based off of location

function showCoordinates(position) {
  let apiKey = "63214c4281922e3bb72fdf12dada7734";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let unit = "units=metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&${unit}`;
  console.log(lat);
  console.log(long);
  axios.get(url).then(getTemp);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(showCoordinates);
}

let button = document.querySelector("#currentLocationButton");
button.addEventListener("click", getLocation);


 //Feature 3, Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
function changeToFarhrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `88°`;
}

function changeToCelcius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `31°`;
}

let ftemp = document.querySelector("#ftemp");
ftemp.addEventListener("click", changeToFarhrenheit);

let ctemp = document.querySelector("#ctemp");
ctemp.addEventListener("click", changeToCelcius);