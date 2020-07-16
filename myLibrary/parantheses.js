const isValid = function (str) {
	if (str.length % 2 === 1) return false;

	const stack = [];
	const fits = {
		")": "(",
		"]": "[",
		"}": "{"
	};
	
	for (let paren of str) {
		const leftCondition = paren === "(" || paren === "[" || paren === "{";
		if (leftCondition) stack.push(paren);
		if (!leftCondition){
			if (stack[stack.length - 1] === fits[paren]) stack.pop();
			else return false;
		}
	}

	return true;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("{[]")); // true
