function solution(s){

    if(s === null) return true;
    const ps = s.match(/p/gi);
    const ys = s.match(/y/gi);
    if(ps === null && ys === null) return true; // 둘 다 null 일 때 true
    if(ps === null || ys === null) return false; 
    // 예외처리 둘 중 하나라도 null 일 때에는 밑에 length 접근 못 함
    if(ps.length === ys.length) return true;
    else return false;    
}