function solution(array, commands) {
    return commands.reduce((returnArr, command) => {
		const result = array.slice(command[0]-1, command[1]).sort( (a,b) => {
			return a < b ? -1:1;
		})[command[2]-1];
        returnArr.push(result);
        return returnArr;
    }, []);
}

console.log(solution([1,5,2,6,3,7,4], [[2,5,3],[4,4,1],[1,7,3]]));
