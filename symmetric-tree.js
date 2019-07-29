// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const _walk = (left, right) => {

    if (!left && !right) {
      return true
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }


    return _walk(left.left, right.right) && _walk(right.left, left.right)
  }
  return _walk(root.left, root.right)

};