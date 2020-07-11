const sameReverse = num => {
	
	const reversed = [...num.toString()].reverse().join('');

	return num.toString() === reversed;

}

console.log(sameReverse(123));
console.log(sameReverse(1221));
console.log(sameReverse(-121));
console.log(sameReverse(10));
