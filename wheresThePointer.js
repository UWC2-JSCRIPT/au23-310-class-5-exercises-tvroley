// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tbodyEl = document.getElementsByTagName('tbody')[0];
tbodyEl.addEventListener('click', (e) => {
    e.target.innerText = `${e.clientX}, ${e.clientY}`;
});