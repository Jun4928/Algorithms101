/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function(t1, t2) {
    
  const dfs = function mergeTwoNodes(node1, node2) {
    
    if(node1 === null || node2 === null) return node1 || node2;
    
    const node = new TreeNode(node1.val + node2.val);
    node.left = dfs(node1.left, node2.left);
    node.right = dfs(node1.right, node2.right);
    
    return node;
  }
  
  return dfs(t1, t2);
};