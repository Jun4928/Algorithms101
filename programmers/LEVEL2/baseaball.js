const getPermutations= function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const solution = function baseball (baseballInputs) {
  const oneToNine = new Array(9).fill(1).map((x, index) => x + index);
  const candidates = getPermutations(oneToNine, 3); // 1-9 까지 3개를 택한 후 모든 순열을 구한다.

  const isPassed = function (candidate, baseballInput) {
    const [numbers, inputStrikes, inputBalls] = baseballInput;
    const numbersToArray = [...numbers.toString()].map(x => parseInt(x));

    let strikes = 0;
    let balls = 0;
    numbersToArray.forEach((number, index) => {
      if (candidate[index] === number) strikes++; // 같은 자리 strike +1
      else if (candidate.includes(number)) balls++; // 숫자 포함 할 때 ball +1
    });

    return strikes === inputStrikes && balls === inputBalls; // strike, ball 이 같아야 통과
  }

  const filteredCandidates = candidates.filter((candidate) => { // 모든 가능한 수열에 대해서 filter 를 거친다.
    for (let i = 0; i < baseballInputs.length; i++) { // 모든 입력에 대해서 검사한다.
      if (!isPassed(candidate, baseballInputs[i])) return false; //한 번이라도 통과 못하면 false
    }

    return true; // for 문에서 모두 다 조건에 대해 통과하면 true
  });

  return filteredCandidates.length;
}

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);