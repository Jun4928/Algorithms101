const twoSum = (nums, target) => {
	const prev = {};

	for (const [index, number] of nums.entries()) {
		const sub = target - number;

		if (prev[sub] != undefined) {
			console.log(sub);
			console.log('matched');
			return [prev[sub], index];
		}

		prev[number] = index;
		console.log(prev);
	}

}

const result1 = twoSum([0, 1, 2 ,3], 5);
console.log(result1);

const result2 = twoSum([0, 1], 1);
console.log(result2);
