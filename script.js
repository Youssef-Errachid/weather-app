
const API = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0962d6568950d8abd49bf2891e647fac';

console.log(API);
// store a reference to the <body> element in a variable for convenience and efficiency.
const Body = document.body;

// constant variable to store an API key.
// 1. Centralized configuration.
// 2. Easy to update If the API key changes.
// 3. Using const The const keyword prevents accidental reassignment.

const API_KEY = "0962d6568950d8abd49bf2891e647fac";

// getElementById is a DOM method that finds and retrieves an HTML element by its unique id attribute.
// get elements by id and store them in the varaible to manipulate  them later on.

const logo = document.getElementById('logo');
const toggle = document.getElementById('Mode');
const modeText = document.getElementById("modeText");
const searchBtn = document.getElementById("btn_search");
const searchInput = document.getElementById("search_input");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const temperature = document.getElementById("temperature");
const statusText = document.getElementById("status");
const cityName = document.getElementById("city_name");
const statusImgMain = document.getElementById("img_status1");
const statusImgSmall = document.getElementById("img_status2");

// This code listens for changes on a toggle switch and switches between dark/light mode.
// toggle contain the element (checkbox) .
// adding an event to get the change (checked/unchecked).

// If toggle is ON (checked) applay the dark mode css and update text color css and change the logo to another logo that contain the black background 
// If toggle is OFF (unchecked) applay the light mode css and update text color css and change the logo to another logo that contain the white background 

toggle.addEventListener('change', function() {
    if (this.checked) {
        Body.className = 'dark-mode';
        modeText.textContent = 'Dark Mode';
       logo.src = "images/img_dark_version.png";
    } else {
        Body.className = 'light-mode';
        modeText.textContent = 'Light Mode';
        logo.src = "images/img_light_version.png";
    }
});

// async allows using await inside the function.
// Creates the API URL using template literals.
// q=${city} : get the city name.
// appid=${API_KEY} : authenticates the request with API key.
// await : pauses execution until the request completes
// Stores the response object in response
// Converts the response from JSON format to a JavaScript object.
// Stores the weather data in data.


async function getWeahter(city){

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(URL);
    const data = await response.json()

    // API returns cod: "404" when the city doesn't exist
    if(data.cod === "404"){
        alert("City not found!");
        return;
    }
        cityName.textContent = data.name;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        statusText.textContent = data.weather[0].description;


    UpdateWeatherImages(data.weather[0].main);

}

function UpdateWeatherImages(status){
    switch(status.toLowerCase()){
          case "clear":
            statusImgMain.src = `images/static/day.svg`;
            statusImgSmall.src = `images/animated/day.svg`;
            break;
        case "clouds":
            statusImgMain.src = `images/static/cloudy-day-1.svg`;
            statusImgSmall.src = `images/animated/cloudy-day-1.svg`;
            break;
        case "rain":
            statusImgMain.src = `images/static/rainy-6.svg`;
            statusImgSmall.src = `images/animated/rainy-6.svg`;
            break;
        case "snow":
            statusImgMain.src = `images/static/snowy-6.svg`;
            statusImgSmall.src = `images/animated/snowy-6.svg`;
            break;
        default :

    }
}
// click the search button and handles the search action.

searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city === "") return alert("Please enter a city name.");
    getWeahter(city);
});

//adding a city at the begining by difaulte 
// getWeahter('rabat');





















