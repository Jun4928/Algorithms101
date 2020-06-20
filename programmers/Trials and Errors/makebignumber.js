const getCombinations = function (array, selectNumber) {
  if (selectNumber === 1) return array.map((value) => [value]);

  const results = [];
  array.forEach((fixed, index, original) => {
    const rest = original.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1); 
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

const solution = function makeBigNumber (number, k) {
  const maxNumber = getCombinations([...number], number.length - k)
                    .reduce((max, combination) => {
                        return Math.max(max, parseInt(combination.join(''))); 
                    }, 0); 

  return maxNumber.toString();
}

const result1 = solution("1924", 2); // 94
const result2 = solution("1231234", 3); // 3234
const result3 = solution("4177252841", 4); // 775841

console.log(result1);
console.log(result2);
console.log(result3);