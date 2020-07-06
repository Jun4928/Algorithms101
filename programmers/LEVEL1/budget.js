const solution = function budget (d, budget) {
  d.sort((a, b) => { // 들어온 배열 오름차순
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let result = 0;
  let sum = 0;

  for (const req of d) {
    sum += req;
    if (sum <= budget) result += 1;
    else break;
  }

  return result;
}

const result1 = solution([1,3,2,5,4], 9); // 3
console.log(result1);


const result2 = solution([2,2,3,3], 10); // 4
console.log(result2);