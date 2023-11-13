// If an li element is clicked, toggle the class "done" on the <li>
const ulEl = document.getElementsByTagName('ul')[0];
ulEl.addEventListener('click', (e) => {
  const parent = e.target.parentElement;
  let liEl = null;
  
  if(parent.tagName === 'LI') {
    liEl = parent;
  } else if(e.target.tagName === 'LI') {
    liEl = e.target;
  }

  liEl.classList.toggle('done');
});

// If a delete link is clicked, delete the li element / remove from the DOM
ulEl.addEventListener('click', (e) => {
  e.stopPropagation();
  if(e.target.className === 'delete') {
    const parent = e.target.parentElement;
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
  const listEl = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = text;
  const deleteButton = document.createElement('a');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'Delete';
  listEl.appendChild(span);
  listEl.appendChild(deleteButton);
  ulEl.appendChild(listEl);
};

const addButton = document.getElementsByClassName('add-item')[0];
addButton.addEventListener('click', addListItem);
