/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = function findMaxDepth (root) { // Breadth First Search
    if(!root) return 0;
  
    const unvisitedQueue = [root, 'LEVEL'];
    let height = 1;

    while(unvisitedQueue.length !== 1) {
        const current = unvisitedQueue.shift();

        if(current === 'LEVEL') {
            height += 1;
            unvisitedQueue.push(current);
        }

        if(current !== 'LEVEL') { // children enqueue 
            if(current.left) unvisitedQueue.push(current.left);
            if(current.right) unvisitedQueue.push(current.right);
        }
    }
  
    return height; // max depth return   
};