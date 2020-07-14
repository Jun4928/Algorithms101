const mapping = {
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
	'f': 4,
	'n': 9,
	'F': 40,
	'N': 90,
	'h': 400,
	'H': 900
}

const romanToNum = function (str) {

	str = str.replace(/IV/g, 'f')
					 .replace(/IX/g, 'n')
					 .replace(/XL/g, 'F')
					 .replace(/XC/g, 'N')
					 .replace(/CD/g, 'h')
					 .replace(/CM/g, 'H');

	let result = 0;
	for (let char of str) result += mapping[char];
	return result;
}

romanToNum('III');
romanToNum('XII');
romanToNum('XXVII');
romanToNum('CMLXXX');
romanToNum('CDXLIX');
