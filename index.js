import { displayWeatherhtml } from "./modules/displayWeatherhtml.js";
import { clear } from "./modules/clear.js";
const apikey = `29ce1736788c172d0887ac281f088845`;

//avoir nom de la ville
function getCityName() {
  try {
    let city = document.getElementById("cityInput").value;

    //si pas le nom de la ville cela envoie une erreur
    if (city === "") {
      throw "Please enter a city";
    }
    return city;
  } catch (error) {
    throw error;
  }
}

//fonction pour avoir la latitude et la longitude
async function getLatLonFromCity(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=29ce1736788c172d0887ac281f088845`;
    let response = await fetch(url);
    let data = await response.json();

    //si c'est une ville qui n'existe pas
    if (data.cod === "404") {
      throw data.message;
    }

    return data.coord;
  } catch (error) {
    throw error;
  }
}

//fonction qui récupère toutes les données de l'API
async function apiCallWeatherAPI() {
  try {
    let city = getCityName(); //si erreur ce qui est en dessous n'est pas pris en compte et direct alerte erreur
    let coord = await getLatLonFromCity(city);

    let url = ` https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&lang=en&exclude=minutely,alerts&appid=${apikey}`;
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    alert(error);
  }
}

// Message erreur bouton search
const btn_search = document.getElementById("btn_search");
btn_search.addEventListener("click", async () => {
  try {
    let data = await apiCallWeatherAPI();
    clear();
    for (let i = 0; i < 5; i++) {
      displayWeatherhtml(data.daily[i], i);
    }
  } catch (error) {
    alert(error);
  }
});

//Message erreur buton enter
document.addEventListener("keyup", async (e) => {
  if (e.key === "Enter") {
    try {
      let data = await apiCallWeatherAPI();
      clear();
      for (let i = 0; i < 5; i++) {
        displayWeatherhtml(data.daily[i], i);
      }
    } catch (error) {
      alert(error);
    }
  }
});
