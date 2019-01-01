let ctx = universe.getContext("2d");

let cW = Math.round(window.innerWidth);
let cH = Math.round(window.innerHeight);

ctx.canvas.width = cW;
ctx.canvas.height = cH;

let rows = 511;
let p = 1;
let h = p / 2;
let w = cW / 2;
let oldRow = [1];

ctx.fillRect((cW / 2) - p, 0, p, p);

function spt(arr, row) {
  let newRow = [1];
  ctx.fillRect(w - (row * h) - p, p * row, p, p);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      newRow[i + 1] = 0;
    } else {
      newRow[i + 1] = 1;
      ctx.fillRect(w - (row * h) + (i * p), p * row, p, p);
    }
  }
  ctx.fillRect(w + (row * h) - p, p * row, p, p);
  newRow.push(1)
  oldRow = newRow;
}

for (let i = 0; i < rows; i++) {
  spt(oldRow, i + 1);
}