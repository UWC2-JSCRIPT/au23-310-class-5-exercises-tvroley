// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const weatherHead = document.getElementById('weather-head');
weatherHead.innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
const sunElements = document.getElementsByClassName('sun');
for(let element of sunElements) {
    element.style.color = 'orange';
}

// Change the class of the second <li> from to "sun" to "cloudy"
const ulEl = document.getElementsByTagName('ul')[0];
let currentChild = ulEl.firstElementChild;
let foundLi = false;
let changedToCloudy = false;
while(currentChild && !changedToCloudy) {
    if(currentChild.tagName === 'LI') {
        if(foundLi) {
            currentChild.setAttribute('class', 'cloudy');
            changedToCloudy = true;
        } else {
            foundLi = true;
        }
    }
    currentChild = currentChild.nextElementSibling;
}