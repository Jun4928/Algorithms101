function solution(s) {
    if(s.length === 1) return 1;

    let compressedStrings = [...Array(Math.floor(s.length/2))].fill(""); // 압축할 때, 반까지만 살펴봐도 되므로.. Math.floor(s.length/2) 만큼 배열을 만든다.
    compressedStrings = compressedStrings.map( (each, index) => {
        return compression(s, index+1); // index+1 이 각각 자르는 unit 이 된다.
    });
    // 각각의 index+1 이 자르는 수가 되고, 그에 맞게 압축된 문자열이 compressedStrings 에 담겨져 있는다.

    console.log(compressedStrings);

    return compressedStrings.reduce((minLength, string) => { // 길이 가장 짧은 것 return
        return Math.min(minLength, string.length);
    }, Infinity);
}

function compression(s, unit) { // string, unit : 자르는 수가 인자로오면, 압축한 string 을 return 하는 함수
    const split = splitIntoArray(s, unit); // unit 으로 자르는 함수 각 잘라진 string 들이 담겨있는 배열
    const compressed = [split[0]];
    split.forEach( (word, index) => {
        if(index !== 0) {
            const prev = compressed[compressed.length - 1].replace(/\d+/, ''); // prev : 이전의 것 숫자를 제외한 순수 문자열
            prev === word ? compressed[compressed.length-1] = duplicate(compressed[compressed.length-1]) : compressed.push(word);
            // 현재 word 와 같다면, duplicate 함수로 중복처리해줘서 숫자 count 늘려주고 저장, 그게 아니라면 그냥 현재 word push 
        }
    });

    return compressed.join('');
}

function duplicate(word) { // 중복 처리 하는 함수 
    const count = word.match(/\d+/); // 숫자부분만 매칭해서
    return count ? `${parseInt(count[0])+1}${word.replace(/\d+/, '')}` : `2${word}`;
    // count 있다면 1더해주고 return, 없다면 2를 앞에 붙여줌
}

function splitIntoArray(s, unit) { // string 과 자르는 수인 unit 을 받아서 잘라진 string chunk 들의 배열을 리턴하는 함수
    const split =  [];
    let start = 0;
    let end = unit;

    while(start <= s.length) { // string length 까지 항상 포함해야 한다.
        split.push( s.slice(start , end) );
        start += unit;
        end += unit;
    }

    return split;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
console.log(solution("a"));
console.log(solution("bbb"));
