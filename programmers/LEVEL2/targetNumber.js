class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const solution = function targetNumber(numbers, target) {

  const makeTree = function dfs (arr) {
    if(arr.length === 0) return [null, null]; // null, null
    const current = arr.shift(); // 값 하나에 +, - 두개의 노드를 만든다.
    const pnode = new TreeNode(current); // plus node
    const mnode = new TreeNode(-current); // minus node
    const [pchild, mchild] = makeTree(arr);  // recursive call
    pnode.left = pchild; // left => plus 
    pnode.right = mchild; // right => minus
    mnode.left = pchild; // left => plus
    mnode.right = mchild; // right => minus
    return [pnode, mnode]; // plus node, minus node return
  }

  const sum = function (node) { // 트리를 받아서, 하나의 줄기별로 모든값을 더해서 각 배열에 담아 리턴하는 함수 
    if(!node.left && !node.right) return [node.val]; // 최하단 만났을 때, 그 노드의 value return
    const left = sum(node.left).map(val => val + node.val); // 왼쪽에서 넘겨받은 배열에 map 함수로 현재 노드 값을 더한다.
    const right = sum(node.right).map(val => val + node.val); // 오른쪽에서 넘겨받은 배열에 map 함수로 현재 노드 값을 더한다.
    return [...left, ...right]; // spread syntax 로 하나의 배열로 만들어서 return
  }
 
  const [left, right] = makeTree(numbers); // 왼쪽, 오른쪽 두개의 트리가 만들어진다.
  const leftSum = sum(left); // 왼쪽 트리에 대한 sum
  const rightSum = sum(right); // 오른쪽 트리에 대한 sum
  return [...leftSum, ...rightSum].filter(sum=> sum === target ? true : false).length;

  // const root = new TreeNode(0); 루트를 생성하는 방법인데, 시간이나 메모리 면에서 좋지않다.
  // root.left = left;
  // root.right = right;
  // return sum(root).filter(sum=> sum === target ? true:false).length;
}

console.log(solution([1,1,1,1,1], 3));
// console.log(solution([1,2,3,4,5], 3));
// console.log(solution([1,2,3], 3));