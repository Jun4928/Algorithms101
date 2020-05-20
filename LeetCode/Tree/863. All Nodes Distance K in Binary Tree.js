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
      node.left = !left || left.val === null  ? null: left;
      node.right = !right || right.val === null ? null : right;
    }
  });

  return array[1]; // the root of the Binary Tree
}

const distanceK = function(root, target, K) {
  let graph = {}; // key: node.value, value: neighbor[parent.value, left.value, right.value];

  const dfs = function treeIntoGraph(node, parent, graph) {
    if(!node) return; // ending condition
    let neighbor = [parent, null, null]; // parent: parent.value -1 : null -1 : null initialized

    if(node.left !== null) {
      neighbor[1] = node.left.val; // store left value
      dfs(node.left, node.val, graph);
    }

    if(node.right !== null) {
      neighbor[2] = node.right.val; // store right value
      dfs(node.right, node.val, graph);
    }

    graph[node.val] = neighbor; // graph update 
  }

  dfs(root, null, graph); // root parent.value = -1

  // Graph BFS Algorithm
  const unvisitedQ = [{ value: target.val, distance: 0 }]; // value, distance;
  const visited = new Set(); // to see if it's visited, Set helps, because it omits dupilication.
  const result = [];

  while(unvisitedQ.length > 0) {
    const {value, distance} = unvisitedQ.shift(); // destructure the current value and the current distance

    if(visited.has(value)) continue; // if this value has been visited, continue this while loop
    visited.add(value); // otherwise, add this value into the visited Set

    if(distance === K && value !== null) result.push(value); // found the node with the same distance K
    if(distance < K && value !== null) {
      const neighbor = graph[value];
      neighbor.forEach(each => unvisitedQ.push({value: each, distance: distance + 1}));
    }
  }

  return result;
};

console.log(distanceK(
  makeBinaryTree([3,5,1,6,2,0,8,null,null,7,4]),
  makeBinaryTree([5,6,2,null,null,7,4]),
  2
));
