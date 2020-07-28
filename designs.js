const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

//function to make the grid
function makeGrid() {
  let gridHeight = document.querySelector('#inputHeight').value;
  let gridWidth = document.querySelector('#inputWidth').value;
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
  for (let a = 1; a <= gridHeight; a++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let b = 1; b <= gridWidth; b++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      gridCell.addEventListener('mousedown', function() {
        const color = document.querySelector('.color-picker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}

makeGrid();
//This prevent the refresh caused by the submit button
sizePicker.addEventListener('submit', function(refresh) {
  refresh.preventDefault();
  makeGrid();
});
//This tells to the browser when we are clicking
let clicking = false;

pixelCanvas.addEventListener('mousedown', function() {
	clicking = true;
});
pixelCanvas.addEventListener('mouseup', function() {
	clicking = false;
});
pixelCanvas.addEventListener('mouseleave', function() {
  clicking = false;
});
pixelCanvas.addEventListener('mouseover', function(a) {
  const color = document.querySelector('.color-picker').value;
  if (clicking) {
    if (a.target.tagName === 'TD') {
    	a.target.style.backgroundColor = color;
    }
  }
});
