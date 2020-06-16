const getPermutations= function (arr, n) {
  const results = [];
  if (n === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((first, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 인덱스를 제외한 배열 
    const permutations = getPermutations(rest, n - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [first, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const example = [1,2,3,4,5];
const result = getPermutations(example, 2);
console.log(result);