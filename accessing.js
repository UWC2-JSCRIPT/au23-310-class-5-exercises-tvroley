// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHead = document.getElementById('weather-head');
weatherHead.innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
const sunElement = document.getElementsByClassName('sun');
for(let element of sunElement) {
    element.style.color = 'orange';
}

// Change the class of the second <li> from to "sun" to "cloudy"
