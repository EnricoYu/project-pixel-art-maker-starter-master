let sizePicker = document.getElementById('sizePicker')
let pixelCanvas = document.getElementById('pixelCanvas')
let height = document.getElementById('inputHeight')
let width = document.getElementById('inputWidth')
let color = document.getElementById('colorPicker')
function makeGrid() {
  for (let a = 0; a <= height.value; a++) {
    let row = pixelCanvas.insertRow(a)
    for (let b = 0; b <= width.value; b++) {
      let cell = row.insertCell(b)
      cell.addEventListener('click', function() {
        this.setAttribute("style", `background-color: ${color.value}`)
    })
    }
  }
}

function removeGrid() {
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild)
  }
}

sizePicker.addEventListener('submit', function(refresh) {
  refresh.preventDefault()
  removeGrid()
  makeGrid()
})
