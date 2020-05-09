function solution(progresses, speeds ) {

    const days = progresses.map( (progress, index) => { // 각 task 별로 걸리는 날짜 구해주기
        return Math.ceil( (100 - progress) / speeds[index] ); // ceil 올림
    });

    const result = [];
    while(days.length !== 0){
        const release = [days.shift()]; // 일단 shift 해서, 배포 배열에 담는다
        while(release[0] >= days[0]){ // 남아 있는 task 들 중 배포 배열의 첫번째 보다 걸리는 날짜가 같거나 작으면 
            release.push(days.shift()); // 같은 날에 배포 해 준다. 
        }
        result.push(release); // 같은 날에 배포되는 task 들이 담겨져 있다.  
    }

    return result.map(each => each.length); // length 를 return 하면 됨.
}


console.log( solution([93, 30, 55], [1, 30, 5]) );
console.log( solution([4, 3, 2, 1], [1, 1, 1, 1]) );
console.log( solution([93, 30, 1, 0], [1, 30, 1 ,5]) );