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

const rangeSumBST = function (root, L, R) {
  let sum = 0;

  const dfs = function findTheValues (node) {
    if(!node) return;
    if(L > node.val) dfs(node.right); // 오른쪽만 검사
    if(node.val > R) dfs(node.left); // 왼쪽만 검사
    if(L <= node.val && node.val <= R) { // in range, 양쪽 다 검사한다.
      sum += node.val;
      dfs(node.left);
      dfs(node.right);
    }
  }

  dfs(root);
  return sum;
}

const root1 = makeBinaryTree([10,5,15,3,7,null,18]);
console.log(root1);
console.log(rangeSumBST(root1, 7, 15));

// const root2 = makeBinaryTree([10,5,15,3,7,13,18,1,null,6]);
// console.log(root2);
// console.log(rangeSumBST(root2, 6, 10));

