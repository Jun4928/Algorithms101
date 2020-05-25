function solution(arrangement) {
  let string = arrangement;
  string = string.replace(/\(\)/gi, 'R'); // 정규표현식 () => Razor 로 바꾸기
  
  let stack = [];
  let result = 0;
  [...string].forEach((value) => {
    if(value === '(') stack.push(1); // 실선 시작
    if(value === ')') result += stack.pop(); // 실선 끝, 결과값에 더해주기
    if(value === 'R') stack = stack.map(each=> each+1); // 스택에 있는 실선 잘라서 막대의 개수 더해주기
  });

  return result;
}


solution("()(((()())(())()))(())");