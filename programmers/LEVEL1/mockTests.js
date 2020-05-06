/**
 * 
 * @param array: answers 
 * @return array: 가장 많이 맞춘 사람,  
 */
function solution(answers){
    // const person1 = "12345"; // 5개씩 반복
    // const person2 = "21232425"; // 8개씩 반복
    // const person3 = "3311224455"; // 10개씩 반복
    const person1Answer = [1,2,3,4,5];
    const person2Answer = [2,1,2,3,2,4,2,5];
    const person3Answer = [3,3,1,1,2,2,4,4,5,5];

    const person1 = answers.filter( (answer, index) => {
        if(answer === person1Answer[index%5]) return true;
    }).length;

    const person2 = answers.filter( (answer, index) => {
        if(answer === person2Answer[index%8]) return true;
    }).length;

    const person3 = answers.filter( (answer, index) => {
        if(answer === person3Answer[index%10]) return true;
    }).length;

    const scores = [];
    scores.push(person1, person2, person3);
    const maxScore = scores.reduce((max, score) => { // 최대점수 구하기
        return Math.max(max, score);
    }, 0);
    // const maxScore = Math.max(person1, person2, person3);

    return scores.reduce((returnArr, score, index) => {  // 동점자도 처리하는 reduce함수
        if(score === maxScore) returnArr.push(index+1); // 최대 점수와 같으면 push
        return returnArr;
    }, []);

}

// console.log(solution([1,2,3,4,5])); // return [1]
console.log(solution([1,3,2,4,2])); // return [1,2,3];