// This is for condition of searching If true it will pop up and if it false it will said no weather found. this is the place to connect to API as well
let weather = {
  apiKey: "6b0257a02dc82c56972d4a3c7dc6673d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
      
  },
  displayWeather: function (data) {
    const { name } = data;
    const {description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city, country").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bars").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

//this code is for "enter" key button work on keyboard
document
  .querySelector(".search-bars")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
weather.fetchWeather("Toronto");

//this code is for the date and time for toronto area.
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = days[d.getDay()];
document.getElementById("day").innerHTML = day;

var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	document.getElementById("date").innerHTML = current_date;

const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function pad(n) {
  return String(n).length === 1 ? `0${n}`: n;
}

function time() {

  const d = new Date();

  hour.textContent = pad(d.getHours());
  minutes.textContent = pad(d.getMinutes());
  seconds.textContent = pad(d.getSeconds());

  setTimeout(time, 1000);
}
//return condition to make time work properly.
time();

