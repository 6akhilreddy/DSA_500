// brute force
// https://www.youtube.com/watch?v=M65xBewcqcI&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=8
// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        for (let k = 0; k < cols; k++) {
          if (matrix[i][k] !== 0) matrix[i][k] = "a";
        }
        for (let k = 0; k < rows; k++) {
          if (matrix[k][j] !== 0) matrix[k][j] = "a";
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == "a") {
        matrix[i][j] = 0;
      }
    }
  }
};

// by using extra space o(rows)+o(cols) and create two dummy array and solve the problem
// instead of creating extra array we can take the first row and col in the same matrix as dummy array
var setZeroesOptimized = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let setCols = false;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) setCols = true;
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
    if (setCols) matrix[i][0] = 0;
  }
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix);
console.log(matrix);
