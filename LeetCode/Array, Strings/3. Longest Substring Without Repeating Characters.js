// Brute Force
// const getPossibleWords = function (str) {
// 	const results = [];

// 	const words = function (chunkSize) {
// 		if (str.length === chunkSize) {
// 			results.push(str);
// 			return;
// 		}
		
// 		for (let index = 0; index + chunkSize <= str.length; index++) {
// 			const word = str.slice(index, index + chunkSize);
// 			results.push(word);
// 		}

// 		words(chunkSize + 1);
// 	}

// 	words(1);

// 	return results;
// }

// const longestSubstringWithoutRepeatingCharacters = (str) => {
// 	if (str.length === 0) return 0;
// 	const possibleWords = getPossibleWords(str);

// 	const onlyUniques = possibleWords.filter((word) => { 
// 		const wordSet = new Set(word); // 중복되는 문자열이 아닐 경우에만 필터에서 걸러짐
// 		return wordSet.size === word.length;
// 	});

// 	return Math.max(...onlyUniques.map((word) => word.length));
// };

// using Set //
// const lengthOfLongestSubstring = (str) => {
// 	const lengthOfStr = str.length;
// 	let hashSet = new Set();
// 	let answer = 0; // to update the longest substring length
// 	let i = 0; // sliding window indicies 
// 	let j = 0;

// 	while (i < lengthOfStr && j < lengthOfStr) {
// 		if (!hashSet.has(str[j])) { // hashSet에 str[j] 가 없을 때 창을 확장시킨다.
// 			hashSet.add(str[j++]); // 다음것을 set에 집어넣는다.
// 			answer = Math.max(answer, j - i); // update the longest substring length
// 		} else { // hashSet 에 str[j] 가 있을 때, (중복된 캐릭터가 있다는 뜻 => 다음 substring 을 찾기 위해서 slide 이동)
// 			hashSet.delete(str[i++]); // slide 를 이동시킨다. 이동하면서 set에서 제거해야 현재 i위치에서 윈도우를 확장시킬 수 있다. 
// 		}
// 	}

// 	console.log(hashSet);

// 	return answer;
// }

// using Map //
const lengthOfLongestSubstring = (str) => {
	const lengthOfStr = str.length;
	let hashMap = new Map();
	let answer = 0;
	let i = 0;
	let j = 0;

	for (j; j < lengthOfStr; j++) {
		if (hashMap.has(str[j])) {
			console.log(hashMap);
			i = Math.max(hashMap.get(str[j]), i);
		}

		answer = Math.max(answer, j - i + 1);
		hashMap.set(str[j], j + 1);
	}

	return answer;
}

console.log(lengthOfLongestSubstring("abcabcabc"));
console.log(lengthOfLongestSubstring("aaaaa"));
console.log(lengthOfLongestSubstring("sttrg"));

// console.log(longestSubstringWithoutRepeatingCharacters("abcdefghijklm"));
// console.log(longestSubstringWithoutRepeatingCharacters("abcdefghcijklmnop"));
// console.log(longestSubstringWithoutRepeatingCharacters(""));
