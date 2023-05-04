import { cond } from "lodash";

let city;
let time;
let condition;
let temp;
let feelslike;

async function getWeather(name = "New York") {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b53fba0c16fe433c933221654230305&q=${name}&aqi=no`,
    { mode: "cors" }
  );
  const catData = await response.json();

  city = catData.location.name;
  time = catData.location.localtime;
  condition = catData.current.condition.text;
  temp = catData.current.temp_f;
  feelslike = catData.current.feelslike_f;

  const cityT = document.querySelector(".city");
  const timeT = document.querySelector(".time");
  const conditionT = document.querySelector(".condition");
  const tempT = document.querySelector(".tempf");
  const feelsLikeT = document.querySelector(".feelslikef");

  city = catData.location.name;
  time = catData.location.localtime;
  condition = catData.current.condition.text;
  temp = catData.current.temp_f;
  feelslike = catData.current.feelslike_f;

  cityT.append(city);
  timeT.append(time);
  conditionT.append(condition);
  tempT.append(temp);
  feelsLikeT.append(feelslike);
}

export default getWeather;
export { city, time, condition, temp, feelslike };
