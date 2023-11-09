// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainEl = body.getElementsByTagName('main')[0];
let currentChild = mainEl.firstElementChild;
while(currentChild) {
    console.log(currentChild.innerText);
    currentChild = currentChild.nextElementSibling;
}

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
let currentParent = ul.parentElement;
let bodyEl = null;
let foundBody = false;
while(currentParent && !foundBody) {
    if(currentParent.tagName === 'BODY') {
        bodyEl = currentParent;
        foundBody = true;
    }
    currentParent = currentParent.parentElement;
}
if(bodyEl) {
    console.log(bodyEl);
}

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
