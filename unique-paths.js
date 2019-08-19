
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to 
// reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// ex 1
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// ---------------------
//  here   |      |       
// ----------------------
//         |      |  end

// ex 2
// Input: m = 7, n = 3
// Output: 28


var uniquePaths = function (m, n) {

  function fac(n) {
    return (n < 2) ? 1 : fac(n - 1) * n;
  }


  let total = m - 1 + n - 1;

  return fac(total) / fac(m - 1) / fac(n - 1);

};

console.log(uniquePaths(3, 2), 3);
// console.log(uniquePaths(7, 3), 28);



// 000
// 000
// 000

// 0000000
// 0000000
// 0000000


// m - 1 = right times
// n - 1 = down  times


const numRoutes = (m, n) => {
  for (let i = 1; i < m; i++) {
    if (i = m)
      for (let k = 1; k < n; k++) {

      }
  }
}



const dfs = (m, n) => {

  let routes = 0;

  let current = [1, 1];

  const func = () => {
    if (current[0] + 1 <= m) {
      current[0]++;
      func();
      current[0]--;
    }

    if (current[1] + 1 <= n) {
      current[1]++;
      func();
      current[1]--;
    }

    if (current[0] === m && current[1] === n) routes++;
  }

  func();


  return routes;

}


//  0, 0, 0, 0
//  0, 0, 0, 0
//  0, 0, 0, 0


console.log(dfs(7, 3))

// if left go left
// if right go right

//       0
//     /   \
//    0     0
//   / \   /  \
//  0   0  0   0






    //     [1,1]
    //     /   \
    // [1,2]    [2,1] 
