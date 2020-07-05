const sum = function(a, b) {
	return a + b;
}

let fibonacci = function(number) {
	if (number === 0) return 0;
	if (number === 1 || number === 2) return 1;

	return fibonacci(number - 1) + fibonacci(number - 2);
}

//console.log(fibonacci(15));

const memoization = (func) => { // input parameter: function
	const cache = {}; // empty hash map
	return (...args) => { // spread syntax for generic use, inner function
		if (cache[args]) {
			console.log(args); // args: []
			console.log(`${args} already called, return from cache`);
			return cache[args];
		}

		console.log(args);
		console.log(`${args} never called, execute and cache`);
		cache[args] = func(...args); // put result into cache, when calling this given function, arguments in array should be spread

		return cache[args];
	}
}


fibonacci = memoization(fibonacci); // wrap fibonacci function with memoization
console.log(fibonacci(15));


const memoizedSum = memoization(sum);
console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum(3, 2));
console.log(memoizedSum(3, 2));
console.log(memoizedSum(3, 4, 5));
console.log(memoizedSum(3, 4, 5));
console.log(memoizedSum(3, 4,[1, 2, 3]));
console.log(memoizedSum(3, 4,[1, 2, 3]));
console.log(memoizedSum(1, 2,[1, 2, 3]));
console.log(memoizedSum(1, 2, {"a": "b"}));
console.log(memoizedSum(1, 2, {"a": "b"}));

