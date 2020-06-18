const isBlanced = function (u) { // u: array[]
    const left = u.map((element) => element === "(").filter(Boolean); // boolean false 거른다 (의 개수 만큼 true 남음
    const right = u.map((element) => element === ")").filter(Boolean);  // boolean false 거른다 ) 개수 만큼 true 남음

    return left.length === right.length; // length 같으면 균형잡힌 괄호 문자열
}

const isRight = function (u) { // u: array[]
  const stack = [];
  u.forEach((element) => {
    if (element === "(") stack.push(element);
    if (element === ")") stack.pop();
  });

  return stack.length === 0; // 괄호가 짝을 이루어서 stack 의 length가 0이면 올바른 괄호 문자열
}

const solution = function (p) {
  if (p.length === 0) return ""; // 재귀 엔딩 조건 빈 배열일 때 빈 문자열 리턴

  const [first, ...v]= [...p]; // u, v 분리하기, input으로 들어온 p 문자열은 불변
  const u = [first]; 
  while (v.length !== 0) {
    u.push(v.shift());
    if (u.length % 2 === 0 && isBlanced(u)) break; // 균형 잡힌 곳에서 종료
  }

  if (isRight(u)) { // u가 올바른 괄호 문자열 일때
    const rightParen = solution(v.join('')); // 나머지 'v' 에 대해서 재귀
    return u.join('') + rightParen; 
  }

  if (!isRight(u)) { // u가 올바른 괄호 문자열이 아닐 때, 문제의 요구사항에 따라서 코딩 
    let result = "(";
    const rightParen = solution(v.join('')); 
    result = result + rightParen + ")";

    const changedU = u.filter((element, index, arr) => { // 처음과 끝 제거 데이터의 불변성을 위해서 filter method 사용
      if (index === 0 || index === arr.length - 1) return false;
      return true;
    }).map((element) => { // chaining 으로 바로 ) => (,  ( => ) 로 뒤집는다.
      if (element === "(") return ")";
      if (element === ")") return "(";
    });

    result = result + changedU.join('');
    return result;
  }
}

const result1 = solution("(()())()");
const expected1 = "(()())()";
console.log(result1);

const result2 = solution(")(");
const expected2 = "()";
console.log(result2);

const result3 = solution("()))((()");
const expected3 = "()(())()";
console.log(result3);