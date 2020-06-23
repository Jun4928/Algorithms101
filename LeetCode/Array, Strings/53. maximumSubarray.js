const maxSubArray = function (nums) {
  // 모든 subArray를 다 구하고, 그것의 합을 비교하는 방법 O(n^2) 시간초과뜸.
  // let maxSum = -Infinity;

  // const getSubArrays = function (array, slicedNumber) {
  //   let index = 0;
  //   while (index + slicedNumber <= array.length) {
  //     const thisSum = array.slice(index, index + slicedNumber).reduce((acc, val) => acc + val);
  //     maxSum = maxSum < thisSum ? thisSum : maxSum;
  //     index += 1;
  //   }

  //   return null;
  // };

  // let slicedNumber = 1;  
  // while (slicedNumber !== nums.length + 1) {
  //   getSubArrays(nums, slicedNumber);
  //   slicedNumber += 1;
  // }

  // return maxSum;

  // 이전값이 음수면, 현재의 값에 더하지 않는다.
  // 양수일 때만, 현재 값에 더해서 저장한다. (최대 sum을 구하기 위해서)
  nums.forEach((value, index) => {
    if (nums[index-1] > 0) nums[index] = value + nums[index-1]; 
  });
  
  return Math.max(...nums); 
};

const result1 = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // expected 6
console.log(result1);

const result2 = maxSubArray([1, 2, 3]); // expected 6
console.log(result2);
