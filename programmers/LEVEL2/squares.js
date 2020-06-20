const getGreatestCommonDivider= function (num1, num2) {
  // ===================================
  // const dividers = new Array(smaller).fill(1).map((x, index) => x + index);
  // const sharedDividers = dividers.filter((divider) => {
  //   if (widthHeight.every((value) => value % divider === 0)) return true;
  //   return false;
  // });

  // return sharedDividers[sharedDividers.length -1];
  // => 실행시간 초과, 나눌 수 있는 수를 1부터 작은수까지 모두 다 만들어서 filter 를 거쳤으니 가장 단순한 방법
  // ===================================

  // ===================================
  // let smaller = Math.min(num1, num2);
  // const array = [num1, num2];
  // while (true) {
  //   if ( array.every(value => value % smaller === 0) ) break; 
  //   else smaller = smaller - 1;
  // }

  // return smaller; 
  // => 이 방법으로 최대공약수를 구해서 문제는 풀었지만, 여전히 최대 공약수를 구하는 효율적인 알고리즘이 되지 못 함
  // ===================================

  // ======유클리드 호제법(Recursion)=======
  return num2 === 0 ? num1 : getGreatestCommonDivider(num2, num1 % num2);
  // 소인수 분해 없이 최대공약수를 구할 수 있는 방법.
   
}

const solution = function rightSquares (w, h) {
  const gcd = getGreatestCommonDivider(w, h);
  const ratio = [w / gcd, h / gcd];
  const cutted = ratio.reduce((acc, value) => acc + value) -1;

  return (w * h) - (cutted * gcd);
}

const result = solution(8, 12);
console.log(result);
const expected = 80;

console.log(getGreatestCommonDivider(3, 9));
console.log(getGreatestCommonDivider(72, 126));