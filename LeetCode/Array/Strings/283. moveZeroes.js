var a = [ 0,1,0,3,12 ]
zero(a);
console.log(a);

function zero(nums) {

	const zeroes = nums.filter( num => {
		return  num === 0 ? true : false;
	});
	let counter = 1;
	debugger;

	while(counter <= zeroes.length){
		nums.splice(nums.indexOf(0), 1);
		nums.push(0);
		counter++;
	}
}


