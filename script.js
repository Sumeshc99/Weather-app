const apiKey = "4a67a28812974097997201250230604";
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

function savecity(){
    const city = document.getElementById("city");
    console.log('aaaaaaaaaaaaaaa',city.value);
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log('bbbbbbbbbbbbbbb',data)
  })
  .catch((error) => {
    console.error("Error fetching weather data: ", error.current.cloud);
  });





  