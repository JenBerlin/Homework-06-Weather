# Server-Side APIs: Weather Dashboard

**##Content of this file\*\***

- Description
- Requirments
- Building Structure of the code
- Screenshot
- Repositery content and links

**##Description\*\***

On the GitHub page (Link) you will find a Weather App web application. The application gives the user a input field to add a city name and to submit it via the "Let's check" button. The searchd city names are getting stored under the search button. To give the user the option to go back to the respective city. The weather app itself shows the user the current weather and a forecast for the following five days for the city. Within the current weather the user gets the data for the date, temperatur, wind per km/h, humidity by % and the UV index. Within the five days forecast the user sees the date, temperatur, wind per km/h and humidity by %. Each weather display includes a weather ican as well.

**##Requierments\*\***

Besides setting up an index.htlm, style.css and script.js file the following frameworks/APIs were requiered to include:

- Framework: Bootsstrap, https://getbootstrap.com/
- Framework: jQuery, https://jquery.com/
- API - current weather: https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d85e1324298ab6b05c6dc20c2cc8da56&units=metric
- API - forecast weather: https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=d85e1324298ab6b05c6dc20c2cc8da56&units=metric

**##Building Structure of the code\*\***

HTML
Head containes ...

- Link to Bootsstrap
- Link to GoogleFonts
- Link to CSS style sheet
- Title

Body contains incl. bootstrap ...

- Body:
  - Header: paragraph with the headline
  - Main:
    - div as a container card + input field + search button
    - h6 for the titel "Already checked cities"
    - ul for the stored city names
    - div card for the current weather display (city, date, temperature, wind, humidity and UV index)
    - five div cards for the forecast (date, temperatur, wind and humidity)
- Link to bootsstrap
- Link to jQuery
- Link to the script.js file

JS

- Variable for searchHistory
- Variable for city name
- Variable for stored city list
- Function to save the stored cities (history)
- Function to get the data from the two APIs
- Function to include the data for the current weather in the respective div
- Function for the five furecast weather cards
- Function to display the stored city names
- Function to get the data for the current weather and the forecast weather
- Fuction to display the stored cities (history)

CSS

Contains the styling for ...

- universal styling

**Screenshot**

![Screen Shot 2021-10-31 at 19 40 25](https://user-images.githubusercontent.com/90558898/139598396-22091ce3-7205-48f9-add7-28ab4ca6170d.png)

**Repositery content and links**

- index.html
- Asset folder: style.css
- Asset folder: script.js
- README.md
- ScreenShot folder: Screenshot of the application

- GitHub: https://github.com/JenBerlin/Homework-06-Weather
- GitHub Page: https://jenberlin.github.io/Homework-06-Weather/
