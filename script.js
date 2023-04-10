const apiKey = "4a67a28812974097997201250230604";

function cityname() {
  const city = document.getElementById("city");
  console.log("aaaaaaaaaaaaaaa", city.value);

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const weather = data.current;
      console.log("bbbbbbbbbbbbbbbb", weather);
      document.getElementById("temperature").textContent = weather.temp_c;
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error.current);
    });
}
