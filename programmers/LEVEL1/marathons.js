function solution(participant, completion) {
	const completeObj = completion.reduce((obj, each) => {
		obj[each] ? obj[each]++ : obj[each] = 1;
		return obj;
	}, {});

	console.log(completeObj);
	
	// let miscomplete = '';
	// participant.forEach(each => { // object 에 없거나, 명단이 이미 다 빠진 경우에 그 놈이 완주 못 한 놈
	// 	if(completeObj[each] === 0 || completeObj[each] === undefined) miscomplete = each; 
	// 	if(completeObj[each] >= 1) completeObj[each] = completeObj[each]-1;
	// });

	// return miscomplete;

	return participant.find( each => {
		if(completeObj[each]) completeObj[each] = completeObj[each]-1; // 명단에 있으면 -1
		else return true; // completeObj[each] === 0 || undefined
	});

}

console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));
