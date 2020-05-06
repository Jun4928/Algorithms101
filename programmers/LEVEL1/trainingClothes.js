/**
 * 
 * @param {int} n : 전체 학생의 수
 * @param {array} lost : 도난당한 학생들의 번호
 * 1<= lost.length <=n, 중복되는 번호 없음
 * @param {array} reserve : 여벌의 체육복을 가져온 학생들의 번호
 * 1 <= reserve.length <=n, 중복되는 번호 없음
 * 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있음
 * 여벌 체육복을 가져온 학생이 체육복을 도난 당했을 수 있음. 이 때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
 * 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없음.
 */
function solution(n, lost, reserve){
    let isOn = [...Array(n)].fill(1); // 모든 학생 1벌 있다고 가정하고 초기화
    reserve.map( index => isOn[index-1]++ ); // 여벌 추가
    lost.map( index => isOn[index-1]-- ); // 도둑당한 사람 빼주기

   if(isOn[0] === 0) { // 1번 학생 예외처리
        if(isOn[1] >=2){
            isOn[1]--;
            isOn[0]++;
        }
    }

    if(isOn[isOn.length-1] === 0){ // 마지막 학생 예외처리
        if(isOn[isOn.length-2] >=2){
            isOn[isOn.length-2]--;
            isOn[isOn.length-1]++;
        }
    }

    for(let i = 1; i < isOn.length-1; i++) {
        if(isOn[i]===0){ // 0벌 일 때, 빌릴 수 있는지 양 옆 참조하기
            if(isOn[i-1]>=2){
                isOn[i-1]--;
                isOn[i] = 1;
                continue;
            }

            if(isOn[i+1]>=2){
                isOn[i+1]--;
                isOn[i] = 1;
                continue;
            } 
        }
    } 

    return isOn.join('').replace(/0/g, '').length; // 0벌인 학생 체육시간 참여 하지 못하니까 제거 해주고, length return 
}

console.log(solution(5, [1,3], [2,4]));