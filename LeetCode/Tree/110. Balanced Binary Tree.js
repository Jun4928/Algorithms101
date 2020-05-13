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
 * @return {boolean}
 */

class BinaryTreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

// const bfs = function BreadthFirstSearch (node) {
//     const unvisitedQueue = [node, 'LEVEL'];
//     let height = 1;

//     while(unvisitedQueue.length !== 1) {
//         const current = unvisitedQueue.shift();

//         if(current === 'LEVEL') {
//             height += 1;
//             unvisitedQueue.push(current);
//         }

//         if(current !== 'LEVEL') {
//             if(current.left) unvisitedQueue.push(current.left);
//             if(current.right) unvisitedQueue.push(current.right);
//         }
//     }
//     return height;
// }

const isBalanced = function toDetermineHeightBalanced (root) {

    const dfs = function (node, heights = []) {
        if(!node) return 0;

        let left = dfs(node.left, heights);
        let right = dfs(node.right, heights);

        if(left === -1 || right === -1 || Math.abs(left - right) > 1) return -1; // unbalanced

        return 1 + Math.max(left, right);

    }

    return dfs(root) !== -1;
};

// const dfs = function toFindtheDepthofBinaryTree (node) { // 
//     if(!node) return 0;
//     let left = dfs(node.left);
//     let right = dfs(node.right);
//     return 1 + Math.max(left, right);
// }

const root1 = new BinaryTreeNode(3);
root1.left = new BinaryTreeNode(9); 
root1.right = new BinaryTreeNode(20); 
root1.right.left= new BinaryTreeNode(15); 
root1.right.right = new BinaryTreeNode(7); 
console.log(isBalanced(root1));
