const plusButton = document.getElementById('plus');
const minusButton = plusButton.nextElementSibling;
const counter = minusButton.nextElementSibling;
let count = 0;

// When a user clicks the + element, the count should increase by 1 on screen.
plusButton.addEventListener('click', (e) => {
    count++;
    counter.innerText = count;
});

// When a user clicks the – element, the count should decrease by 1 on screen.
minusButton.addEventListener('click', (e) => {
    count--;
    counter.innerText = count;
});