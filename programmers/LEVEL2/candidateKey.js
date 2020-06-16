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


const solution = function candidateKeys (relation) {
  const attributes = new Array(relation[0].length).fill(0).map((value, index) => value + index); 

  const subSets = getSubsets(attributes);  // 속성들의 부분집합 구하기

  const tupleToString = function (tuple, set) { 
    return set.reduce((str, value) => { // 부분 집합의 value만 선택해서 str 만들어서 return
      return str + tuple[value];
    }, '');
  };

  const superKeys = subSets.filter((set) => { // 모든 부분집합에 대해서 유일성 검사
    const tuples = [];
    
    for (let i = 0; i < relation.length; i++) { // 모든 튜플에 대해서
      const tupleStr = tupleToString(relation[i], set); // 각 튜플 -> 현재의 부분집합에 따라 str 으로 만들기
      if (tuples.includes(tupleStr)) return false; // 중복되면 바로 false return 되서 유일성 확보 X
      if (!tuples.includes(tupleStr)) tuples.push(tupleStr);  // 중복되지 않을 때만 tuples 에 push
    };

    return true // 위의 for문에서 false 로 return 되지 않으면, 유일성 확보 된 것
  });

  const isSub = function (key, comparedKey) { // comparedKey 의 모든 요소가 key 안에 포함되어야 한다.
    return comparedKey.every((value) => key.includes(value)); // Key > comparedKey 부분집합 성립하는지 확인하는 코드
  }

  const candidateKeys = superKeys.filter((key, index) => { // 유일성 검사 된 key 에 대해서 최소성 검사하기
    for (let i = 0; i < superKeys.length; i++) {
      if (i === index) continue; // 같은 것은 검사 X
      if (isSub(key, superKeys[i])) return false; // 현재 key가, 배열 중 하나라도 부분집합으로 가진다면, 최소성에서 탈락
    }
    return true;
  });

  console.log(candidateKeys);
  return candidateKeys.length; // 후보키의 최대 개수
}

solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]);

// edge test case.. 
solution([['b','2','a','a','b'],
  ['b','2','7','1','b'],
  ['1','0','a','a','8'],
  ['7','5','a','a','9'],
  ['3','0','a','f','9']]);

// 풀었던 문제 중 가장 어려웠던 문제..
// 최소성 검사할 때, 부분집합이 되는지 확실하게 하기 위해서는 배열의 모든 요소를 확인 해 주어야 한다.