const API_KEY = "4855d0bb819b18e9c044a2d671bd2eae";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const nameSpan = document.querySelector("#weather span:first-child");
      const weatherSpan = document.querySelector("#weather span:last-child");
      const name = data.name;
      let temp = ``;
      if (data.weather[0].main === "Clouds") {
        temp = `☁️ / ${data.main.temp}°C`;
      } else if (data.weather[0].main === "Clear") {
        temp = `☀️ / ${data.main.temp}°C`;
      } else if (data.weather[0].main === "Mist") {
        temp = `🌫️ / ${data.main.temp}°C`;
      } else {
        temp = `${data.weather[0].main} / ${data.main.temp}°C`;
      }
      const weather = temp;

      nameSpan.innerText = name;
      weatherSpan.innerText = weather;
    });
}
function onGeoFail(error) {
  alert("I'm sorry. We couldn't figure out your current location.");
  console.log(`ERROR(${error.code}): ${error.message}`);
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
