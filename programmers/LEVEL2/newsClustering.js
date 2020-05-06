function solution(str1, str2) {
    const clearedString1 = str1.toLowerCase(); // 먼저 대문자 => 소문자로 바꾸기
    const clearedString2 = str2.toLowerCase();

    const arrayStr1 = strIntoArray(clearedString1); // 2개씩 구성된 word 로 쪼개기
    const arrayStr2 = strIntoArray(clearedString2);

    if(arrayStr1.length === 0 && arrayStr2.length === 0) return 65536; // 둘 다 공집합 일 때는 J(A, B) = 1

    const countObj1 = counts(arrayStr1); // 쪼개진 word count 하기
    const countObj2 = counts(arrayStr2);

    const and = aAndb(countObj1, countObj2);
    const or = aOrb(countObj1, countObj2);

    if(Object.keys(and).length === 0 ) return 0; // 교집합={} 일 때 J(A, B) = 0 
    
    // *주의사항 : 교집합이 0 일 때 Object.values(and) = [] 이 되고 여기에 reduce 적용하면 fatal error 뜸
    // 위에서 예외처리 필수적으로 해 주어야 함
    const andValue = Object.values(and).reduce((acc, num) => acc+num); // values 모두 더하기
    const orValue = Object.values(or).reduce((acc, num) => acc+num); //

    return parseInt((andValue/orValue) * 65536);
}

// function clear(str) { // 순수 영문자, 소문자로 구성하기
//     return str.toLowerCase().replace(/[^a-z]/gi, '');
// } // 처음에 문자열을 영문으로만 구성하는 함수를 구현 했는데, 이렇게 접근하면 틀림!
// 단적인에로, 2개씩 쪼갤 때, 띄어쓰기 공간이 줄어들면서 비교할 word 배열에 추가된다. 

function strIntoArray(clearedString) { // 2개씩 쪼개는 함수
    const array = [...clearedString];
    const seperate = [];
    array.map( (char, index, arr) => {
        if(index !== arr.length-1){
            const word = `${char}${arr[index+1]}`;
            isValid(word) ? seperate.push(word) : seperate;
        } 
    });
    return seperate;
}

function isValid(word){ // 특수문자 있을 때 return false
    if(word.match(/[^a-z]/gi)) return false;
    else return true;
}

function counts(arr) {
    return arr.reduce((obj, word) => {
        obj[word] ? obj[word]++ : obj[word] = 1;
        return obj;
    }, {});
}

function aAndb(countObj1, countObj2) { // 교집합 구하기 
    const and = {};
    for(let word in countObj1) { 
        if(word in countObj2) and[word] = Math.min(countObj1[word], countObj2[word]); // 둘 중 값 작은 것
    }
    return and;
}

function aOrb(countObj1, countObj2) { // 합집합 구하기, 모든 key, value 다 들어가야함
    const or = {};
    for(let word in countObj1) { 
        if(word in countObj2) or[word] = Math.max(countObj1[word], countObj2[word]); // 중복 될 때, 둘 중 값 큰 것
        else or[word] = countObj1[word];
    }

    for(let word in countObj2) {
        if(word in or) or
        else or[word] = countObj2[word];
    }

    return or;
}


console.log(solution('FRANCE','french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('aa1+aa2', 'AAAA12'));
console.log(solution('E=M*C^2', 'e=m*c^2'));