//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function createMatrix(string) {
  let arr = string.split('\n');

  arr = arr.map((subArr) => subArr.split(' '));
  const rows = arr.length;
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix.push(
      Array.from(arr[i], (el) => {
        return parseInt(el);
      })
    );
  }
  return matrix;
}

function extractColumns(matrix) {
  const columns = [];
  let counter = 0;
  const matrixLength = matrix[0].length;
  while (counter < matrixLength) {
    const tempArr = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j === counter) tempArr.push(matrix[i][j]);
      }
    }
    columns.push(tempArr);
    counter++;
  }
  return columns;
}
export class Matrix {
  constructor(string) {
    this.value = createMatrix(string);
  }

  get rows() {
    return this.value;
  }

  get columns() {
    const columns = extractColumns(this.value);
    return columns;
  }
}
