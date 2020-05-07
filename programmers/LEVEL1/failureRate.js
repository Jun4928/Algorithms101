function solution(N, stages) {
    let fRate = Array(N).fill(0); 
    // array : {stage number: index+1, rate : thisStage / reached} 
    
    fRate = fRate.map((each, index) => {
       	const thisStage = stages.filter(stage => { // 현재 stage 사람 수
           return stage === index+1 ? true : false; 
        }).length;

        const reached = stages.filter(stage => { // 현재 stage 에 도달한 사람 수
           return stage >= index+1 ? true: false; 
        }).length;

        if(reached === 0) return {stage: index+1, rate: 0} // reached = 0 => rate: 0 

        return {stage: index+1, rate: thisStage / reached}; // 객체를 return 
    });


    // fRate: array => element : {stage: stage number, rate: failure rate value};
    fRate.sort( (a, b) => { // failure rate 내림차순
        if(a.rate < b.rate) return 1; // return value > 0 b comes first
        if(a.rate > b.rate) return -1; // return value < 0 a comes first 
        return a.stage < b.stage ? -1 : 1; // 실패율 같을 때에는, stage number 오름차순
    });


    return fRate.map(each => each.stage);  // array: sorted stage numbers return
} 

console.log(solution(5, [2,1,2,6,2,4,3,3])); // [3,4,1,2,5];