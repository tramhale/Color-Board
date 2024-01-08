//accessing our div container and assigning it to a variable
const container = document.getElementById('container');

//creating array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

const SQUARES = 2900;

/*looping over the SQUARES to create our squares,
  *using event listeners to set effect on mouseover and mouseout
  *then appending it a container.
  */
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}
// algorithm for getting random colors from the color array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
// algorithm for setting color on each box on mouseover
function setColor(element) {
   const color = getRandomColor();
   element.style.background = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
//algorithm for removing the color from the box on mouseout
function removeColor(element) { 
   element.style.background = '#1d1d1d';
   element.style.boxShadow = '0 0 2px #000';
}
