const complexNumberMultiply = (a, b) => {
	const [frontNumber, frontI] = a.split('+');
	const [backNumber, backI] = b.split('+');
	
	const iToNumber = function(i) {
		return Number(i.replace('i', ''));
	}

	const numberPart = (Number(frontNumber) * Number(backNumber)) + (iToNumber(frontI) * iToNumber(backI)) * - 1;
	const iPart = (Number(frontNumber) * iToNumber(backI)) + (iToNumber(frontI) * Number(backNumber));

	return `${numberPart}+${iPart}i`;
}
