function solution(s, n) {
    let s2Arr = [...s];
    s2Arr = s2Arr.map(char => char.charCodeAt()); // string to ASCII Code
    s2Arr = s2Arr.map(number => password(number, n)); //  apply password function
    s2Arr = s2Arr.map(number => String.fromCharCode(number)); // ASCII Code to String
    return s2Arr.join('');
}

function password(number, n) { // make password of each character
    if(number === 32) return 32;
    if(number <= 90 && number + n > 90) return number + n - 26;
    if(number <= 122 && number + n > 122) return number + n - 26;
    return number + n;
}



console.log( solution("AB", 1) );
console.log( solution("z", 1) );
console.log( solution("a B z", 4) );