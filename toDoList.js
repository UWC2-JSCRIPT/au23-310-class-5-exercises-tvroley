// If an li element is clicked, toggle the class "done" on the <li>
let ulEl = document.getElementsByTagName('ul')[0];
ulEl.addEventListener('click', (e) => {
  const parent = e.target.parentElement;
  if(parent.tagName === 'LI') {
    parent.setAttribute('class', 'done');
  } else if(e.target.tagName === 'LI') {
    e.target.setAttribute('class', 'done');
  }
});

// If a delete link is clicked, delete the li element / remove from the DOM
ulEl.addEventListener('click', (e) => {
  e.stopPropagation();
  if(e.target.className === 'delete') {
    let parent = e.target.parentElement;
    parent.remove();
  }
});

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
};
