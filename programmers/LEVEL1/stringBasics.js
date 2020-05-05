function solution(s) {
    if(s.length === 4 || s.length == 6){
        if(s.match(/\D/g)) return false;
        else return true;
    } else {
        return false;
    }
}