/*
* @param {string} 
* @return {boolean}
*/

const isValid = function(string) {
    const stringArr = [...string];
    const stack = [];

    const left_regex = /\{|\[|\(/g;
    const right_regex = /\}|\]|\)/g;
    for(let char of stringArr){
        if(char.match(left_regex)) stack.push(char);
        if(char.match(right_regex)) {
            const check = stack[stack.length -1] + char;
            if(checkRegex(check)) stack.pop();
            if(!checkRegex(check)) return false;
        }
    }
    if(stack.length === 0) return true;
    if(stack.length !== 0 ) return false;
}

function checkRegex(check) {
    const check_regex = /\(\)|\{\}|\[\]/g;
    if(!check.match(check_regex)) return false;
    if(check.match(check_regex)) return true;
}

console.log(isValid('{}'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])]'));
console.log(isValid('{()}'));

console.log('-------------');
console.log(isValid('['));
console.log(isValid(""));