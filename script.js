// Setting up the local storage; get search history from local storage
const searchHistory = JSON.parse(localStorage.getItem('search-history')) || []

// DOM nodes
const cityNode = $("#city")
const cityList = $("#city-list")

function saveHistory (history){
    localStorage.setItem("search-history", JSON.stringify(history))
}

// Implement wheater API with fetch fuction; getting the wheater data for the city
function getWeatherFromAPI(city) {
  const weatherApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&appid=${"d85e1324298ab6b05c6dc20c2cc8da56"}&units=metric` ;

  return fetch(weatherApiUrl)
    .then(function (weatherApiResponse) {
      return weatherApiResponse.json();
    })
}

function showHistory(history){
    cityList.empty()
    for (const city of history){
        cityList.append($(
            `<button class="showWheaterButton">${city}</button>`
        ))
    }
    $(".showWheaterButton").click(showWheaterCity)
}

// implement the main fuction
function showWheaterCity(event){
    console.log(event.target)

}

function showWeather(data){

}

$("#check").on("click", function(){
    const city = cityNode.val()
    searchHistory.push(city)
    saveHistory(searchHistory)


    getWeatherFromAPI(city).then(function (result){
        showWeather(result)
        showHistory(searchHistory)
    })

})
showHistory(searchHistory)

console.log("Hello")