function solution(board, moves){

	// 들어온 board 배열을 stack 들이 모인 배열로 만들기 위한 코드
	// [[], [], ...]; 배열 만들어 놓기 => 여기 부분이 핵심!
	// 들어온 2차원 배열을 이용해서 새 스택으로 이루어진 배열로 만들기
	const boardStacks = [...Array(board.length)].map(x => []);
	board.map( (element) => {
		element.map((num, index) => {
			if(num!==0) boardStacks[index].unshift(num); //해당하는 index 의 배열에 number 집어넣기
		});
	});

	const putStack = []; // 인형 쌓는 스택
	const deletedStack = []; // 지워진거 쌓는 스택
	// let deleted_scores = 0;
	console.log(boardStacks);
	// moves command 처리하기
	while(moves.length!==0) {
		const command = moves.shift();
		if(boardStacks[command-1].length !== 0){
			const putNum = boardStacks[command-1].pop();
			if(putStack[putStack.length-1] === putNum) { // stack top 이 집어넣는 것과 같을 때
				putStack.pop(); // 같은거 팝 해주고
				deletedStack.push(putNum); // deleted 스택에 쌓기
				deletedStack.push(putNum); 
				// deleted = deleted + 2; // 점수 증가시키는 방법
			} else {
				putStack.push(putNum); // 아닐 때는 그냥 stack 에 쌓기
			}
		}
	}
	console.log(putStack);
	console.log(deletedStack);
	return deletedStack.length;
}

const board = [[0,0,0,0,0], [0,0,1,0,3], [0,2,5,0,1], [4,2,4,4,2], [3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));
