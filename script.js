// var iconcode = a.weather[0].icon;

// Setting up the local storage; get search history from local storage
const searchHistory = JSON.parse(localStorage.getItem('search-history')) || []

// DOM nodes
const cityNode = $("#city")
const cityList = $("#city-list")

function saveHistory (history){
    localStorage.setItem("search-history", JSON.stringify(history))
}

// Implement wheater API with fetch fuction; getting the wheater data for the city
const getWeatherFromAPI = async(city) => {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d85e1324298ab6b05c6dc20c2cc8da56&units=metric`;

try {
    const response = await fetch(weatherApiUrl)
    const data = await response.json()
    console.log(data)
    return data
} catch (error) {
    console.error(error.message)
}

//   return fetch(weatherApiUrl)
//     .then(function (weatherApiResponse) {
//         console.log(weatherApiResponse)
//       return weatherApiResponse.json();
//     }).catch(function(error){
//         console.log(error)
//     })
}

function currentDayCard(data) {
$("#temp11").text(data.list[0].main.temp)
$("#wind11").text(data.list[0].wind.speed)
$("#humidity11").text(data.list[0].main.humidity)
// Call same API different end point for UV
// $("#uv11").text(data.list[0].main.humidity)
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
    getWeatherFromAPI(event.target.innerHTML).then(function (result){
        currentDayCard(result)
    })
}

function showWeather(data){

}

$("#check").on("click", function(){
    const city = cityNode.val()
if (!searchHistory.includes(city)){
    searchHistory.push(city)
}

    saveHistory(searchHistory)

    getWeatherFromAPI(city).then(function (result){
        showWeather(result)
        showHistory(searchHistory)
        currentDayCard(result)
    })
})
showHistory(searchHistory)

console.log("Hello")