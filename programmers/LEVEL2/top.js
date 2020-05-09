function solution(heights) {
    let reversed = []; // 일단 뒤집기
    while(heights.length !== 0) reversed.push(heights.pop()); 

    let revResult = reversed.map( (height, i, arr) => {
        arr = arr.slice(i+1); // 뒤집어서, 자신보다 뒤에 있는 배열 중에서 가장 첫번째로 
        const findIndex = arr.findIndex(each => each > height); // 자기보다 큰 놈 index 찾기
        return findIndex === -1 ? 0 : findIndex + i + 1; // 없으면 0, 있으면 index + i + 1 해 주어야한다. (앞에서 잘랐으므로)
    });

    const result = []; // 다시 뒤집기
    while(revResult.length!==0) result.push(revResult.pop());

    console.log(result);
    // 뒤집어서 찾은 index 이므로,, 결과에 원래 배열의 length - index 를 해 주어야 함.
    return result.map(index => index === 0? 0 : result.length - index);
}


console.log( solution( [6, 9, 5, 7, 4]) );
console.log( solution( [3, 9, 9, 3, 5, 7, 2]) );
console.log( solution( [1, 5, 3, 6, 7, 6, 5]) );