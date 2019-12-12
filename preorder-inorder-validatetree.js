        
/**
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length !== inorder.length) return 0;
    let preIdx = 0;

    let idxMap = {};
    
    for(let i = 0; i< inorder.length; i++){
        idxMap[inorder[i]] = i;
    }

    
    const helper = (idxLeft, idxRight) => {

        if (idxLeft === idxRight) return null;
        let root_val = preorder[preIdx];
        
        let treeRoot = new TreeNode(root_val);
        

        let index = idxMap[root_val];
        preIdx++;
        treeRoot.left = helper(idxLeft,index);
        treeRoot.right = helper(index+1, idxRight);
        return treeRoot;
        
    }
    
    return helper(0, inorder.length);
    

};
