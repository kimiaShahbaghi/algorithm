const rotateImage = (matrix) => {
  let copyMatrix = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = copyMatrix[matrix.length - 1 - j][i];
    }
  }
  return matrix;
};

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
