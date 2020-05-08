function solution(priorities, location) {
    let priorityQ = [...Array(priorities.length)].fill(0);

    priorityQ = priorityQ.map( (each, index) => {
        return {i: index, priority: priorities[index]}; // index, prioirty 객체로 이루어진 Queue(배열)
    });

    const printer = [];
    while(priorityQ.length !== 0){
        const current = priorityQ.shift();
        const higher = priorityQ.find( each => { // prioirty 높은거 찾는다.
            return each.priority > current.priority ? true : false; 
        }); 
        higher ? priorityQ.push(current) : printer.push(current);
        // 있으면 queue 뒤에 push / 없으면 printer 로 출력!
    }

    // printer 에는 출력순서가 담겨있다. location 과 같은 index + 1 해주면, 몇번째에 출력됬는지 알 수 있음
    return printer.findIndex(each => each.i === location) + 1;
}


console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1,1,9,1,1,1], 0));