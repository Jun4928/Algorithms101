const getSubsets = function (arr) {
  let flag = new Array(arr.length).fill(false);
  const subSets = [];

  const subSet = function DFS (depth) { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
    if (depth === arr.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
      const subSet = arr.filter((value, index) => flag[index]); // 해당 flag true => 부분집합 포함
      subSets.push(subSet); // 부분집합들을 담는 배열에 push

      return;
    }

    flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽
    subSet(depth + 1); // 다시 재귀호출

    flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
    subSet(depth + 1); // 다시 재귀 호출
  }
  
  subSet(0); // depth 0 부터 시작
  return subSets;
}

const example = [1,2,3];
const result = getSubsets(example);
console.log(result);