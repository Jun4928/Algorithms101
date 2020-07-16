const topK = function(nums, k) {
	const countObj = nums.reduce((obj, number) => {
		if (number in obj) obj[number] += 1;
		else obj[number] = 1;

		return obj;
	}, {});

	const sortedKeys = Object.keys(countObj).sort((a, b) => {
		if (countObj[a] < countObj[b]) return 1;
		if (countObj[a] > countObj[b]) return -1;
		return 0;
	});


	return sortedKeys.slice(0, k).map((key) => Number(key));
}

console.log(topK([1,1,1,2,2,3], 2));
