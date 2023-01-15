//? Matrix Transpose

const transpose = (matrix) => matrix[1].map((c, i) => matrix.map((r) => r[i]));
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));      