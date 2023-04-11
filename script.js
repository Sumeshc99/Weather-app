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
      document.getElementById("img").src = weather.condition.icon;
      document.getElementById("condition").textContent = weather.condition.text;
      document.getElementById("feel").textContent = weather.feelslike_c;
      document.getElementById("humidity").textContent = weather.humidity;
      document.getElementById("wind").textContent = weather.wind_kph;
      document.getElementById("gust").textContent = weather.gust_kph;
      document.getElementById("pressure").textContent = weather.pressure_in;
      document.getElementById("windDegree").textContent = weather.wind_degree;

    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error.current);
    
    });
    /*alert("Show Notification!");*/
}



