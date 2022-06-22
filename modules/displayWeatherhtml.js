import { getDayName } from "./getDayName.js";
//fonction pour avoir les 5 éléments de l'app
export function displayWeatherhtml(day, index) {
  let logoUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
  let dayName = getDayName(index);
  const div = document.createElement("div");
  div.innerHTML = `<span class="jour">${dayName}</span>
      <span class="logo"><img src="${logoUrl}" alt="" /></span>
      <span class="tempMin">${day.temp.min}°</span>
      <span class="tempMax">${day.temp.max}°</span>`;
  document.querySelector("#dayOfWeek").appendChild(div);
}
