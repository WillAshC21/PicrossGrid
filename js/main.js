function display() {
let sudoku = document.createElement('div');
let grid = document.createElement('div');
sudoku.setAttribute('class', 'sudoku');
  grid.setAttribute('class', 'grid');
  sudoku.append(grid);
document.body.appendChild(sudoku);
console.log(grid);
}
display();
// let sudoku = document.querySelectorAll(".grid");
