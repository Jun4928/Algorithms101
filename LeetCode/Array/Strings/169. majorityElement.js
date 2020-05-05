function majorityElement(nums) {
	
	let maxNum = nums[0];
	const countObj = nums.reduce( (obj , num) => {
		obj[num] ? obj[num]++ : obj[num]=1;
		return obj;
	}, {});

	for(let num in countObj) {
		if(countObj[maxNum] <= countObj[num]) {
			maxNum = num;
		}
	}
	return maxNum;

}

console.log(majorityElement([2,2,1,1,1,2,2,4,4,4,4,4,4,4,4]));
//console.log(majorityElement([2,3,3]));


