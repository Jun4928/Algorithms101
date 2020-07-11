const getPrefix = (strs) => {
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

console.log(getPrefix(['start', 'stair', 'step']));
console.log(getPrefix(['start', 'wework', 'today']));
console.log(getPrefix([]));
