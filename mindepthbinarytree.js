// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */



var minDepth = function (root) {
  if (!root) return 0;


  let depth = 1;
  let min = 1;

  let walk = (node) => {
    if (!node.left && !node.right) {
      if (min === 1 || depth < min) {
        min = depth;
      }
    }


    if (node.left) {
      depth++;
      walk(node.left);
      depth--;
    }

    if (node.right) {
      depth++;
      walk(node.right)
      depth--;
    }

  }


  walk(root)

  return min;

};