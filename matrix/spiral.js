
// Traverse a matrix in spiral order


// [ 1, 2, 3, 4, 5]
// [6, 7, 8, 9, 10]
// [11,12,13,14,15]

// Output ===> [1,2,3,4,5,10,15,14,13,12,11,6,7,8,9]


// Layer by layer aproach ===> print each layer and decrement pointers bring the bounds in to the next layer
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

  let ans = [];
  if (matrix.length == 0) return ans;
  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) ans.push(matrix[r1][c]);
    for (let r = r1 + 1; r <= r2; r++) ans.push(matrix[r][c2]);
    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) ans.push(matrix[r2][c]);
      for (let r = r2; r > r1; r--) ans.push(matrix[r][c1]);
    }
    r1++;
    r2--;
    c1++;
    c2--;

  }
  return ans;

};