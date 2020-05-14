/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function(root) {

    const dfs = function ReturnMaxDepth(node)  {
      if(!root) return 0;  

      const maxD = node.children.reduce((max, child) => {
        const depth = dfs(child); 
        return depth > max ? depth : max;
      }, 0);

      return 1 + maxD;
    }

  return dfs(root);
};