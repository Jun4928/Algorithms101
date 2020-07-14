const moreThanHalf = function (nums) {
	let countObj = {};
	let majority;	

	nums.forEach((number, index) => {
		if (number in countObj) countObj[number] += 1	;
		else countObj[number] = 1;

		if (index === 0) majority = number;
		else majority = countObj[majority] < countObj[number] 
										? number : majority;
	});

	return Number(majority);
}

console.log(moreThanHalf([3, 2, 3]));
console.log(moreThanHalf([2, 2, 1, 1, 1, 2, 2]));

