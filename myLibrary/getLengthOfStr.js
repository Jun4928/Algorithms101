const getPowerset = function (array) {
	let flag = new Array(array.length).fill(false);
	const subSets = [];
	
	const getSubset = function (depth) {
		if (depth === array.length) {
			const subSet = array.filter((value, index) => flag[index]);
			subSets.push(subSet);
			return;
		}
	
		flag[depth] = true;
		getSubset(depth + 1);

		flag[depth] = false;
		getSubset(depth + 1);
	}

	getSubset(0);
	return subSets;
};

const getPossibleWords = function (str) {
	const results = [];

	const words = function (chunkSize) {
		if (str.length === chunkSize) {
			results.push(str);
			return;
		}
		
		for (let index = 0; index + chunkSize <= str.length; index++) {
			const word = str.slice(index, index + chunkSize);
			results.push(word);
		}

		words(chunkSize + 1);
	}

	words(1);

	return results;
}

const getLengthOfStr = (str) => {
	//const possibleWords = new Set(getPowerset([...str]).map((word) => word.join(''))); // 중복 제거
	if (str.length === 0) return 0;
	const possibleWords = getPossibleWords(str);

	const onlyUniques = possibleWords.filter((word) => { 
		const wordSet = new Set(word); // 중복되는 문자열이 아닐 경우에만 필터에서 걸러짐
		return wordSet.size === word.length;
	}).filter((word) => str.match(word));

	return Math.max(...onlyUniques.map((word) => word.length));
};

console.log(getLengthOfStr("abcabcabc"));
console.log(getLengthOfStr("aaaaa"));
console.log(getLengthOfStr("sttrg"));

console.log(getLengthOfStr("abcdefghijklm"));
console.log(getLengthOfStr("abcdefghcijklmnop"));
console.log(getLengthOfStr(""));
