"use strict";
let cities = [
  {
    id: 1,
    name: "Benbrook, TX",
    latitude: 32.6732,
    longitude: -97.4606,
  },

  {
    id: 2,
    name: "Pittsburgh, PA",
    latitude: 40.44068116260463,
    longitude: -79.99595287604313,
  },

  {
    id: 3,
    name: "Orlando, Fl",
    latitude: 28.5383,
    longitude: 81.3792,
  },

  {
    id: 4,
    name: "Phoenix, Az",
    latitude: 33.4484,
    longitude: 112.074,
  },
];
//set variables
const stateDrop = document.querySelector("#state-drop");
const stateTable = document.querySelector("#state-table");
const stateTableBody = document.querySelector("#state-table-body");
let selectedCity = "";

//linking array to dropdown
function loadDropData() {
  for (const city of cities) {
    let option = document.createElement("option");
    option.textContent = city.name;
    option.value = city.id;
    stateDrop.appendChild(option);
  }
}

//setting up api
function loadData() {
    stateTableBody.innerHTML = "";
  let selectedValue = stateDrop.value;
  for (let city of cities) {
    if (selectedValue == city.id) {
      selectedCity = city;
    }
  }
  fetch(`https://api.weather.gov/points/${selectedCity.latitude},${selectedCity.longitude}`)
    .then((response) => response.json())
    .then((data) => {
      return fetch(`${data.properties.forecast}`);
    })
    .then((response2) => response2.json())
    .then((weatherData) => {
      for (let cityWeather of weatherData.properties.periods) {
        let row = stateTableBody.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerText = cityWeather.name;
        let cell2 = row.insertCell(1);
        cell2.innerText = cityWeather.temperature;
        let cell3 = row.insertCell(2);
        cell3.innerText = cityWeather.detailedForecast;
      }
      if (weatherData) {
        stateTable.style.display = "block";
      } else stateTable.style.display = "none";
    });
}

//wire up
loadDropData();
stateDrop.onchange = loadData;


