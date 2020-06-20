const solution = function makeBigNumber (number, k) {
  let results = "";

  const findFirstMax = function (numbers, deleteNumber) {
    if (deleteNumber === 0) {
      results += numbers;
      return;  
    }

    if (numbers.length === deleteNumber) return;

    const range = numbers.substring(0, deleteNumber + 1);
    let foundArray = [0, 0];
    for (let i = 0; i < range.length; i ++) {
      if (foundArray[0] < range[i]) foundArray = [range[i], i];
    }
    // const [foundMax, foundIndex] = [...range].reduce((result, value, index) => {
    //   if (result[0] < value) return [value, index]; 
    //   return result;
    // }, [0, 0]); ==> 테스트케이스 8에서 8초가 걸리던게 위의 for문으로 바꾸어주니 1.5초 걸림
    // spread syntax로 range를 복사하는게 배열이 커지면 비용이 큰 작업이다.
   
    const [foundMax, foundMaxIndex] = foundArray;
    results += foundMax;
    const rest = numbers.substring(foundMaxIndex + 1);
    findFirstMax(rest, deleteNumber - foundMaxIndex);
  }

  findFirstMax(number, k);

  return results;
}

const result1 = solution("1924", 2); // 94
console.log(result1);

const result2 = solution("1231234", 3); // 3234
console.log(result2);

const result3 = solution("4177252841", 4); // 775841
console.log(result3);

const result4 = solution("1000000", 2); // 10000
console.log(result4);

const result5 = solution("98769876", 3) // 99876
console.log(result5);

const result6 = solution("9999", 2) // 9999
console.log(result6);