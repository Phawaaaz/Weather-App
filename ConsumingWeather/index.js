// https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=9c56dc5e4dfd47aa7fa1665568e9233e

const inputValue = document.querySelector(".input");
const city = document.querySelector(".city");
const dateValue = document.querySelector(".date");
const degree = document.querySelector(".degree");
const eventValue = document.querySelector(".event");
const clickMe = document.getElementById("search");
const myImage = document.getElementById("myImage");

clickMe.addEventListener("click", () => {
  fetchData();
});

inputValue.defaultValue = "Abuja";

const fetchData = async () => {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=9c56dc5e4dfd47aa7fa1665568e9233e`
  );
  const data = await response.json();

  console.log(data);
  city.innerHTML = data?.name;
  dateValue.innerHTML = new Date();
  degree.innerHTML = Math.round(data?.main?.temp - 273) + "°C";
  eventValue.innerHTML = data?.weather?.[0]?.main;
  if (data?.weather?.[0]?.main === "Rain") {
    myImage.src = "./rain.png";
  } else {
    myImage.src = "./cloud.png";
  }
  console.log(data?.weather);
};

window.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
