function solution(s)
{
    let splitArray = s.split(' ');
    splitArray = splitArray.map(word => {
        const changed = [...word]
        for(let i = 0; i < word.length ; i++) {
            if(i%2===0) changed[i] = word[i].toUpperCase(); 
            if(i%2!==0) changed[i] = word[i].toLowerCase();
        }
        return changed.join('');
    });

    return splitArray.join(' ');

}

console.log(solution("try hello world"));