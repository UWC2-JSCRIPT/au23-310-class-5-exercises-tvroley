// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let mainEl = document.getElementsByTagName('main')[0];
let currentChild = mainEl.firstElementChild;
let lastP = null;
while(currentChild) {
    if(currentChild.tagName === 'P') {
        lastP = currentChild;
    }
    currentChild = currentChild.nextElementSibling;
}
const aEl = document.createElement('a');
aEl.id = 'cta';
aEl.innerText = 'Buy Now!';
lastP.insertAdjacentElement('afterend', aEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imageEl = document.getElementsByTagName('img')[0];
const dataColor = imageEl.getAttribute('data-color');
console.log(dataColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
