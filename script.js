function getWeatherFromAPI(city) {
  var weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=d85e1324298ab6b05c6dc20c2cc8da56&units=metric` ;

  fetch(weatherApiUrl)
    .then(function (weatherApiResponse) {
      return weatherApiResponse.json();
    }).then(function(weatherData){
    console.log(weatherData)
    })
}


$("#check").on("click", function(){
    getWeatherFromAPI();

})

    console.log("Hello")