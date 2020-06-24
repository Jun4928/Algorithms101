/* 속도, 메모리 효율성 둘 다 뒤에서 5% */
// brute force 방법 => 너무 느림 가능한 모든 경우의 수를 다 확인하기 때문이다.
// const twoSum = function (nums, target) {
//   let result = [];
//   nums.forEach((first, firstIndex) => {
//     const rest = nums.slice(firstIndex + 1);
//     rest.forEach((second, secondIndex) => {
//       if (first + second === target) result = [firstIndex, firstIndex + secondIndex + 1];
//       // if (target - first === second)
//     });
//   });

//   return result;
// }

const twoSum = function (nums, target) {
  // Array.entries() => [index, value] 쌍 2차원 배열 return
  // 바로 destructuring 통해서 값을 가져옴.
  const complements = new Map();
  for (const [index, number] of nums.entries()) { 
    const complement = target - number;
    if (complements.has(complement)) return [complements.get(complement), index];

    complements.set(number, index);
  }

  return 'not found';
}

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);