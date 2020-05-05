function solution(n, arr1, arr2){

    // bit 연산하기
    const secretCode = arr1.map((number, index) => {
        return number | arr2[index];
    });

    console.log(secretCode);
    // 문자열로 변환해서 return 하기
    return secretCode.map( number => {
        const two = tenToTwo(n, number); // two : 입력받은 n 자릿수 맞춘 2진법 string
        return two.replace(/0/g,' ').replace(/1/g, '#'); // replace 로 g 정규표현식.. 두 번 돌리면 0 은 공백으로 1은 # 으로..
    });
}

// ten => two 자리수 맞춰서 해당하는 string 리턴하는 함수
function tenToTwo(n, number) {
    let two = number.toString(2);
    if(two.length === n) return two;
    else {
        while(two.length !== n) {
            two = '0' + two;
            if(two.length === n) return two;
        }
    }
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// function solution(n, arr1, arr2){

//     const secretCode = arr1.map((number, index) => {
//         return number | arr2[index];
//     });

//     console.log(secretCode);
    
//     // 문자열로 변환해서 return 하기
//     return secretCode.map( number => {
//         const two = tenToTwo(n, number); // two : 입력받은 n 자릿수 맞춘 2진법 string
//         return [...two].reduce((result, char) => { // 공백과 # 으로 나타내기 위한 reduce 함수
//             result += char === '0' ? ' ' : '#';
//             return result;
//         }, '');
//     });
// }

// // ten => two 자리수 맞춰서 해당하는 string 리턴하는 함수
// function tenToTwo(n, number) {
//     let two = number.toString(2);
//     if(two.length === n) return two;
//     else {
//         while(two.length !== n) {
//             two = '0' + two;
//             if(two.length === n) return two;
//         }
//     }
// }
