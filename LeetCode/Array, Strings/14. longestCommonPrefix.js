const longestCommonPrefix = (strs) => {
	if (strs.length === 0) return '';

	const [firstString, ...restStrs] = strs;
	let result = '';

	for (let [index, char] of [...firstString].entries()) {
		const isValid = restStrs.every((restStr) => restStr[index] === char);

		if (isValid) result += char;
		else return result;	
	}

	return result;
}

console.log(longestCommonPrefix(['start', 'stair', 'step']));
console.log(longestCommonPrefix(['start', 'wework', 'today']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix([]));
