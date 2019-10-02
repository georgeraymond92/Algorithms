// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false



var isSameTree = function (p, q) {

  if (!p && !q) return true;

  let same = true;

  const _walk = (node1, node2) => {
    if (node1.val !== node2.val || !same) {
      same = false;
      return;
    }
    if (node1.left && node2.left) {
      _walk(node1.left, node2.left)
    } else if (
      node1.left && !node2.left ||
      !node1.left && node2.left) {
      return same = false;
    }
    if (node1.right && node2.right) {
      _walk(node1.right, node2.right)
    } else if (
      node1.right && !node2.right ||
      !node1.right && node2.right) {
      return same = false;
    }
  }
  _walk(p, q);
  return same;


};