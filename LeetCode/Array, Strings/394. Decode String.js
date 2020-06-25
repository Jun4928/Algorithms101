const decodeString = function (str) {

  while (str.match(/\d/gi)) { // 숫자가 매핑될 때까지 반복
    str = str.replace(/\d+\[[a-z]+\]/gi, (matched) => { // 정규표현식으로 매칭된 문자열을 첫번째 인자로 사용할 수 있다.
      const repeatNumber = Number(matched.match(/\d+/gi)[0]); // number 매칭
      const internalStr = matched.match(/[a-z]+/gi); // a to z characters 매칭
      return internalStr[0].repeat(repeatNumber); // 괄호 안에 담긴 문자열을 반복해서 return 하면 매칭된 문자열이 변환된다.
    });
  }

  return str;
}

const result1 = decodeString("3[a]2[bc]");
console.log(result1); // aaabcbc

const result2 = decodeString("3[a2[c]]"); // => 3[acc]
console.log(result2); // accaccacc

const result3 = decodeString("2[abc]3[cd]ef");
console.log(result3); // abcabccdcdef

const result4 = decodeString("abc3[cd]xyz");
console.log(result4); // abccdcdcdxyz

const result5 = decodeString("100[leetcode]");
console.log(result5);