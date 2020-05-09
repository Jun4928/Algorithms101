function solution(strings, n) {
    return strings.sort( (a, b) => {
        if(a[n] < b[n]) return -1; // n번째 캐릭터로 오름차순 
        if(a[n] > b[n]) return 1;
        return a < b ? -1 : 1; // 같을 때에는 사전순으로, string 전체 비교
    });
}


console.log( solution(["sun", "bed", "car"], 1 ) );
console.log( solution(["abce", "abcd", "cdx"], 2 ) );