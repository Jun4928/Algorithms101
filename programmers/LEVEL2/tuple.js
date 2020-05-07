function solution(s) {
    let arr = strToArr(s); // sub array 로 구성된 array 로 바꾸기

    arr.sort( (a, b) => { // sub array 배열의 길이 오름차순으로 정렬하기
        return a.length < b.length ? -1 : 1;
    });

    arr = arr.map(each => { // 각각의 숫자 string -> Integer 로 바꾸기
        return each.map(num => parseInt(num));
    });

    const result = []; // 튜플 담을 배열
    arr.forEach(each => {
        const putNumber = each.find( number => { // 튜플에 이미 담긴 원소 중에서 없는 것을 찾는다.
            return result.includes(number) ? false : true;    
        });
        result.push(putNumber); // 튜플에 push
    });

    return result;
}

function strToArr(str) {
    let arr = str.split('},'); // }, 로 쪼개고
    arr = arr.map(each => { // 괄호 다 제거 해주기
        return each.replace(/\{/gi, '').replace(/\}/gi, '');
    });
    return arr.map(each => { // 각각의 배열을 , 로 쪼갠다. 숫자 구분을 위해서
        return each.split(',');
    });
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2,1,3,4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2,1,3,4]
console.log(solution("{{20,111},{111}}")); // [111, 20] 
console.log(solution("{{123}}")); // [111, 20] 
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3,2,4,1]