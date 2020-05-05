function intoSubResults(dartResult) {
    let words = dartResult.match(/\d\d?(S|D|T|)(#|\*)?/g);
    words = words.map( element => {
        if(element[1] === "0") {
            const tmp = [...element];
            tmp.shift();
            tmp[0] = "10";
            return tmp;
        }
        return [...element];
    });
    return words;
}

function eachScores(splitResult) {
    return splitResult.reduce((scores, element, index) => {
        let eachScore = 0;
        const number = parseInt(element[0]);
        if(element[1] === "S") eachScore = number * 1;
        if(element[1] === "D") eachScore = number * number; 
        if(element[1] === "T") eachScore = number * number * number;

        if(element[2] === "*" && index === 0) eachScore = eachScore *2;
        if(element[2] === "*" && index > 0) {
            eachScore = eachScore * 2;
            scores[index-1] = scores[index-1] * 2;
        }

        if(element[2] === "#") eachScore = eachScore * -1;

        scores.push(eachScore)
        return scores; 
    }, []);
}

function solution(dartResult) {

    const splitResult = intoSubResults(dartResult);
    console.log(splitResult);
    const result = eachScores(splitResult);
    console.log(result);

    return result.reduce((acc, num) => acc + num);
}


// console.log(solution("1D2S#10S"));
// console.log(solution("1S2D*3T"));
// console.log(solution("1S2D*3T"));
// console.log(solution("1D#2S*3S"));
// console.log(solution("1T2D3D#"));
// console.log(solution("1D2S3T*"));
// console.log(solution("10S1D2S#"));