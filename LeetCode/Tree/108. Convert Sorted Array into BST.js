/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val); 
        this.left = (left=== undefined ? 0 : left); 
        this.right = (right === undefined ? 0 : right); 
    }
}

const sortedArrayToBST = function(nums) { // nums : sorted array which contains numbers
    if(nums === null || nums.length === 0) return null;

    const midIndex = Math.floor(nums.length / 2); // mid index 가 root, parent 가 되어야한다.
    const node = new TreeNode(nums[midIndex]); // parent 
    node.left = sortedArrayToBST( nums.slice(0, midIndex) ); // left child, 가운데 전까지의 배열 재귀로 보냄
    node.right = sortedArrayToBST( nums.slice(midIndex+1) ); // right child, 가운데 뒤에 배열 재귀로 보냄

    return node;
};

console.log(sortedArrayToBST([-10,-3,0,5,9])); // [0, -3, 9, -10, null, 5];