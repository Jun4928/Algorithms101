/* ============ 시행착오 코드 ============ */
// const getCombinations = function (array, selectNumber) {
//   if (selectNumber === 1) return array.map((value) => [value]);

//   const result = [];
//   array.forEach((fixed, index, original) => {
//     const rest = original.slice(index + 1);
//     const combinations = getCombinations(rest, selectNumber - 1);
//     const attached = combinations.map((combination) => [fixed, ...combination]);
//     result.push(...attached);
//   });

//   return result;
// }

// const getUniques = function (arrays) {
//   const uniqueSet = new Set();

//   return arrays.filter((array) => {
//     const stringfied = array.sort().join('');
//     if (uniqueSet.has(stringfied)) return false;
//     else {
//       uniqueSet.add(stringfied);
//       return true;
//     }
//   }); 
// }

// const threeSum = function (nums) {
//   const tripletscombinations = getCombinations(nums, 3);
//   const resultSets = tripletscombinations.filter((triplet) => triplet.reduce((acc, val) => acc + val, 0) === 0);

//   console.log(resultSets);
//   const uniques = getUniques(resultSets);

//   return uniques;
// }


/* ======= 시행착오2, 모든 결과값들을 구한다음에 이 함수에 넣어서 unique 한 배열을 따로 빼냈음 ======== */
// const getUniqueTriplets = function (arrays) {
//   const sortedAndStringfiedSet = new Set(); 

//   return arrays.filter((array) => {
//     const sortedAndStringfied = array.sort().join('');
//     if (sortedAndStringfiedSet.has(sortedAndStringfied)) return false;

//     sortedAndStringfiedSet.add(sortedAndStringfied);
//     console.log(sortedAndStringfiedSet);
//     return true;
//   });
// }


/* ========= 시행착오3, twoSum 의 리턴으로 여러 값을 주었다. 중복 처리를 하려고 했으나 못 함 ========*/
// const threeSum = function (nums) {
//   const results = [];
//   const checkedIndex = new Set();

//   const twoSum = function (nums, targetNumber) {
//     const complements = new Map();
//     const results = [];
  
//     for (const [index, value] of nums.entries()) {
//       const complement = targetNumber - value;

//       if (complements.has(complement)) { // paired
//           results.push([complements.get(complement), index])
//           complements.delete(complement);
//           continue;
//       };
  
//       complements.set(value, index);
//     }
  
//     return results; 
//   }

//   for (const [index, number] of nums.entries()) {
//     if (checkedIndex.has(index)) continue;
//     const rest = nums.slice(index + 1);

//     const twoSumIndexPairs = twoSum(rest, 0 - number)
//     .map((pair) => {
//       return pair.map(x => {
//         const realIndex = x + index + 1;
//         checkedIndex.add(realIndex);
//         return realIndex;
//       });
//     });

//     const attached = twoSumIndexPairs.map((pair) => [index, ...pair]);
//     results.push(...attached);
//   }

//   return results.map((indexs) => indexs.map(index => nums[index]));
// }

const threeSum = function(nums) {

  const twoSum = function(numbers, targetNumber) {
    const results = [];
    const previous = new Set();

    for (const number of numbers) {
      const sub = targetNumber - number;
      if (previous.has(sub)) { // two sum pair
        results.push([sub, number]);
        continue;
      }

      previous.add(number);
    }

    return results;
  }

  const fixedNums = new Set();
  const results = [];
  const alreadyUsedTwoSums = new Set();

  nums.sort();
  for (const [index, num] of nums.entries()) {
    if (fixedNums.has(num)) continue;
    const rest = nums.slice(index + 1);
      
    const twoSums = twoSum(rest, 0 - num).filter((two) => {
      const stringfied = two.toString();
      if (alreadyUsedTwoSums.has(stringfied)) return false;
      alreadyUsedTwoSums.add(stringfied);
      return true;
    });

    const attahced = twoSums.map((two) => [num, ...two]);

    results.push(...attahced);
    fixedNums.add(num);
  }

  return results;
}



const result = threeSum([-1, 0, 1, 2, -1, -4]); // [[-1, 0, 1], [-1, -1, 2]];
console.log(result);

const result2 = threeSum([0,0,0,0]);
console.log(result2);

const result3 = threeSum([-2,0,0,2,2]);
console.log(result3);

const result4 = threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
console.log(result4);

const result5 = threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]);
console.log(result5);