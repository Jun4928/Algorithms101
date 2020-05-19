class TreeNode {
  constructor(value){
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const makeBinaryTree = function(array) { // array into Binary Tree
  array.unshift(0);
  array = array.map(value => new TreeNode(value));

  array.forEach( (node, index, arr) => {
    if(index !== 0){
      const left = arr[index*2];
      const right = arr[index*2+1];
      node.left = !left || !left.val ? null: left;
      node.right = !right || !right.val ? null : right;
    }
  });

  return array[1]; // the root of the Binary Tree
}

const isSymmetric = function (root) {

  const check = function (depth) { // check if array is symmetric or not
    const length = depth.length;
    if(length === 1) return true;

    const halfIndex = Math.floor(length/2) - 1;

    for(let i = 0; i <= halfIndex; i++) {
      if(depth[i] !== depth[length-i-1]) return false;
    }

    return true;
  }

  const bfs = function iteratively (root) {
    const queue = [root, 'LEVEL'];
    let depth = [];

    while(queue.length > 1) {
      const current = queue.shift();
      if(current === 'LEVEL') {
        queue.push('LEVEL');
        if(!check(depth)) return false;
        depth = [];
      } else if(current === null) {
        depth.push(null);
      } else { // node
        current.left !== null ? queue.push(current.left) : queue.push(null);
        current.right !== null ? queue.push(current.right) : queue.push(null);
        depth.push(current.val);
      }
    }

    return true;
  }

  const dfs = function mirroring(node1, node2) {
    if(node1 === null && node2 === null) return true;
    if(node1 === null || node2 === null) return false;
    if(node1.val !== node2.val) return false;
    if(node1.val === node2.val) {
      const inner = dfs(node1.right, node2.left);
      const outer = dfs(node1.left, node2.right);
      return !inner || !outer ? false : true;
    }
  }

  // return bfs(root);
  return dfs(root.left, root.right);
}

const root1 = makeBinaryTree([1,2,2,3,4,4,3]);
console.log(isSymmetric(root1));

const root2 = makeBinaryTree([1,2,2,null,3,null,3]);
console.log(isSymmetric(root2));

const root3 = makeBinaryTree([1,2,3]);
console.log(isSymmetric(root3));