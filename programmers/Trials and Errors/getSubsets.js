const getSubsets = function (arr) {
  let flag = new Array(arr.length).fill(false);
  const subSets = [];

  const subSet = function DFS (depth) { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
    if (depth === arr.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
      const set = [];
      for (let i = 0; i <= arr.length; i++) { // 이 순간의 flag에 따라 부분집합의 값들이 달라진다.
        if (flag[i] === true) set.push(arr[i]); // flag === true => 집합 만들기 
      }
      subSets.push(set); // 부분집합들을 담는 배열에 push
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

const example = [1,2,3,4,5];
const result = getSubsets(example);
console.log(result);