function solution(a, b) {

	const front  = Math.min(a, b);
	const end  = Math.max(a, b);

	let arr = [...Array(end-front+1)];
	arr = arr.map( (each, index) => {
		return front + index;
	});
	console.log(arr);
	return arr.reduce((acc,num) => acc+num);

}

console.log(solution(3,5));
console.log(solution(3,3));
console.log(solution(5,3));

