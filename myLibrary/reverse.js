const reverse = (number) => {
	let reversedString = [...`${number}`].reverse().join('');

	if (reversedString.match('-')) {
		reversedString = reversedString.replace('-', '');
		return Number(reversedString) * -1;
	}


	return Number(reversedString)
}

console.log(reverse(1234));
console.log(reverse(-1234));
console.log(reverse(1230));
