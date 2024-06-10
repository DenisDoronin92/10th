fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=51.32&lon=46.00&appid=9b41f413c005353dd6d0d728b21f2140"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".speed").textContent = data.wind.speed;
    document.querySelector(".humidity").textContent = data.main.humidity;
    document.querySelector(".country").textContent = data.sys.country;
    document.querySelector(".sunrise").textContent = data.sys.sunrise;
    document.querySelector(".sunset").textContent = data.sys.sunset;
  });
