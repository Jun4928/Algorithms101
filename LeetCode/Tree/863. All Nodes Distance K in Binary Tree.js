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
  let graph = {};
  const dfs = function BinaryTreeIntoGraph (node, parent) {
    if(node === null) return; // ending 조건 : null 일 때 그냥 return   
    const neighbor = [];
    neighbor.push(parent);

    node.left ? neighbor.push(node.left.val) : neighbor.push(null); // 있으면 값, 없으면 null push
    dfs(node.left, node.val);

    node.right ? neighbor.push(node.right.val) : neighbor.push(null); // 있으면 값, 없으면 null push
    dfs(node.right, node.val);

    graph[node.val] = neighbor; // graph 에 저장 [parent, left.value, right.value];
  }
  dfs(root, null);
  console.log(graph);

  // Graph BFS Algorithm : using [Queue:unvisited and Set:visited]
  const unvisitedQueue = [{ value: target.val, distance: 0 }];   
  const visitedSet = new Set();
  const result = [];

  while(unvisitedQueue.length > 0) {
    const {value, distance} = unvisitedQueue.shift(); // 현재 탐색할 노드 Queue 에서 꺼냄

    // if(value === null) continue; <= 이 구문을 넣었더니 성능이 심하게 저하되었다.
    if(visitedSet.has(value)) continue;  // 미리 봤다면, 아래 과정을 거칠 필요가 없음
    visitedSet.add(value); // 먼저 set 에 넣어준다. 다음번에 반복을 피하기 위해서

    if(distance === K && value !== null) result.push(value); // 거리가 같고, null 이 아니라면 push
    if(distance < K && value !== null) { // 아직 거리에 도달하지 못 했다면, 탐색을 계속한다.
      // 탐색을 지속한다는 의미는 queue 에다가 탐색 할 애들을 넣어주는 것
      const neighbor = graph[value]; // neighbor array [parent, left, right];
      neighbor.forEach( each => unvisitedQueue.push({value: each, distance: distance + 1 })); // distance 1을 증가시킨다. 
    }

  }

  return result;
}

console.log(distanceK(
  makeBinaryTree([3,5,1,6,2,0,8,null,null,7,4]),
  makeBinaryTree([5,6,2,null,null,7,4]),
  2
));
