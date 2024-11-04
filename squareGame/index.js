const container = document.getElementById('container')
const score = document.getElementById('score')
const cellNumbers = document.getElementById('cellNumbers')
const seconds = document.getElementById('seconds')
let min_num_cells = 2
let num_color = 2
let init_cells = 20

function createCell () {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  let randomColor = Math.floor(Math.random() * num_color) + 1;
  cell.classList.add('color' + randomColor)
  cell.setAttribute('onclick', 'removeCell(this)')
  container.append(cell)
  refreshCellNumbers()
}

function removeCell (cell) {
  let rangeCells = [cell]
  let color = cell.classList[1]
  let nextCell = cell.nextElementSibling
  while (nextCell && nextCell.classList[1] === color) {
    rangeCells.push(nextCell)
    nextCell = nextCell.nextElementSibling
  }

  let prevCell = cell.previousElementSibling
  while (prevCell && prevCell.classList[1] === color) {
    rangeCells.push(prevCell)
    prevCell = prevCell.previousElementSibling
  }

  if (rangeCells.length >= min_num_cells) {
    score.textContent = parseInt(score.textContent) + rangeCells.length
    rangeCells.forEach(cell => cell.remove())
    refreshCellNumbers()
    if (container.children.length == 0) {
      clearInterval(idInterval)
      clearInterval(idSeconds)
      setTimeout(() => container.innerHTML = '<h1>Buena crack</h1>', 1000)
    }
  }
}

function refreshCellNumbers () {
  cellNumbers.textContent = container.children.length
}

function increaseSeconds () {
  seconds.textContent++
}



for (let i = 0; i < init_cells; i++) {
  createCell()
}

let idInterval = setInterval(createCell, 2000)
let idSeconds = setInterval(increaseSeconds, 1000)