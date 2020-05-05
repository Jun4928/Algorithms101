function reverseString(s) {
	const halfIndex = s.length % 2 === 0? s.length / 2 : Math.round(s.length/2);
	debugger;
	for (let i = 0; i < halfIndex ; i++) {
		const tmp = s[i];
		s[i] = s[s.length - i - 1];
		s[s.length - i - 1] = tmp;
	}
	
}

const array =[..."helloo"];
reverseString(array);
console.log(array);
