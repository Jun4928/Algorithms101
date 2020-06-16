const getCombinations = function (arr, n) {
  const results = [];
  if (n === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((first, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 인덱스를 제외한 나머지 뒤
    const combinations = getCombinations(rest, n - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [first, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

const example = [1,2,3,4,5];
const result = getCombinations(example, 2);
console.log(result);