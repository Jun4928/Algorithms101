function solution(arr)
{
    const reducedArray = arr.reduce( (array, element) => {
        if(array[array.length-1]!==element) array.push(element);
        debugger;
        return array;
    }, []);

    return reducedArray;
}

console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));