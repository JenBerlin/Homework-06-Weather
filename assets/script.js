
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
    const coord = data.city.coord
    const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=d85e1324298ab6b05c6dc20c2cc8da56&units=metric`
    const response1 = await fetch(weatherForecastUrl)
    const data1 = await response1.json()
    console.log(data1)
    data.daily = data1.daily
    return data
} catch (error) {
    console.error(error.message)
}
}

function currentDayCard(data) {
$("#display-city").text(data.city.name + " (" + data.list[0].dt_txt + ")")
console.log(data)
$("#temp11").text(data.list[0].main.temp)
$("#wind11").text(data.list[0].wind.speed)
$("#humidity11").text(data.list[0].main.humidity)
$("#icon-current").attr("src", `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}.png`)
// Call same API different end point for UV
// $("#uv11").text(data.list[0].main.humidity)
}

function forecastCard1(data) {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    console.log(date.toLocaleDateString())
    
    $("#dayF1").text(date.toLocaleDateString())
    // $("#iconF1").attr("src", `http://openweathermap.org/img/wn/${data.daily[1].weather[1].icon}.png`)
    $("#tempF1").text(data.daily[1].temp.day)
    $("#windF1").text(data.daily[1].wind_speed)
    $("#humidityF1").text(data.daily[1].humidity)

    date.setDate(date.getDate() + 1)
    $("#dayF2").text(date.toLocaleDateString())
    // $("#iconF2").attr("src", `http://openweathermap.org/img/wn/${data.daily[2].weather[2].icon}.png`)
    $("#tempF2").text(data.daily[2].temp.day)
    $("#windF2").text(data.daily[2].wind_speed)
    $("#humidityF2").text(data.daily[2].humidity)

    date.setDate(date.getDate() + 1)
    $("#dayF3").text(date.toLocaleDateString())
    // $("#icon-current").attr("src", `http://openweathermap.org/img/wn/${data.daily[3].weather[3].icon}.png`)
    $("#tempF3").text(data.daily[3].temp.day)
    $("#windF3").text(data.daily[3].wind_speed)
    $("#humidityF3").text(data.daily[3].humidity)

    date.setDate(date.getDate() + 1)
    $("#dayF4").text(date.toLocaleDateString())
    // $("#icon-current").attr("src", `http://openweathermap.org/img/wn/${data.daily[4].weather[4].icon}.png`)
    $("#tempF4").text(data.daily[4].temp.day)
    $("#windF4").text(data.daily[4].wind_speed)
    $("#humidityF4").text(data.daily[4].humidity)

    date.setDate(date.getDate() + 1)
    $("#dayF5").text(date.toLocaleDateString())
    // $("#icon-current").attr("src", `http://openweathermap.org/img/wn/${data.daily[5].weather[5].icon}.png`)
    $("#tempF5").text(data.daily[5].temp.day)
    $("#windF5").text(data.daily[5].wind_speed)
    $("#humidityF5").text(data.daily[5].humidity)
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
    getWeatherFromAPI(event.target.innerHTML)
    .then(function (result){
        currentDayCard(result)
        forecastCard1(result)
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