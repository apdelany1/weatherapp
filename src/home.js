import getWeather from "./getWeather";

function runHome(e) {
  getWeather();
  const submit = document.querySelector("button");
  const form = document.querySelector("form");

  submit.addEventListener("click", checkboxClick);

  function checkboxClick(event) {
    const cityT = document.querySelector(".city");
    const timeT = document.querySelector(".time");
    const conditionT = document.querySelector(".condition");
    const tempT = document.querySelector(".tempf");
    const feelsLikeT = document.querySelector(".feelslikef");

    cityT.innerHTML = "City: ";
    timeT.innerHTML = "Time: ";
    conditionT.innerHTML = "Weather is: ";
    tempT.innerHTML = "Temp: ";
    feelsLikeT.innerHTML = "Feels like: ";

    getWeather(form[0].value);
    event.preventDefault();
  }
}

export default runHome;
