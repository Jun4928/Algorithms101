const solution = function candidateKeys (relation) {
  const attributes = new Array(relation[0].length).fill(0).map((x, i) => i);
  let flag = new Array(relation[0].length).fill(0);
  const subSets = [];
  
  const subSet = function DFS (depth) { // 부분 집합 구하는 재귀 함수, DFS 알고리즘
    if (depth === attributes.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
      const set = [];
      for (let i = 0; i <= attributes.length; i++) {
        if (flag[i] === 1) set.push(attributes[i]); // flag 의 상태에 따라서 부분집합들이 만들어진다.
      }
      subSets.push(set); // 부분집합들을 담는 배열에 push
      return;
    }

    flag[depth] = 1; // 해당 depth의 flag 1
    subSet(depth + 1); // 다시 재귀호출

    flag[depth] = 0; // 해당 depth의 flag 0
    subSet(depth + 1); // 다시 재귀 호출
  }
  
  subSet(0); // depth 0 부터 시작

  const tupleToString = function (tuple, set) { 
    return set.reduce((str, value) => { // 부분 집합의 value만 선택해서 str 만들어서 return
      return str + tuple[value];
    }, '');
  };

  const superKeys = subSets.filter((set) => { // 모든 부분집합에 대해서 유일성 검사
    const tuples = [];

    relation.forEach((tuple) => { // 모든 튜플에 대해서
      const tupleStr = tupleToString(tuple, set); // 각 튜플 -> 현재의 부분집합에 따라 str 으로 만들기
      if (!tuples.includes(tupleStr)) tuples.push(tupleStr);  // 중복되지 않을 때만 tuples 에 push
    });

    return relation.length === tuples.length; // 테이블의 row 개수와 같으면 
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