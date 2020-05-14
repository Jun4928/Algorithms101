/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children; // array
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) { 
    if(!root) return 0;  
   
    //const childrenDepth = root.children.map(child => maxDepth(child));
    //const maxD = childrenDepth.reduce((max, depth) => depth > max ? depth : max , 0);
    const maxD = root.children.reduce((max, child) => { // 위의 두 줄 map, reduce 를 한번에 구현한 것
      const depth = maxDepth(child); 
      return depth > max ? depth : max;
    }, 0);
    
    return 1 + maxD;
  };