const set1 = new Set([1,2,3,4,5,6,7,8]); // array => set 으로 변환 (알아서 중복제거 됨)
const set2 = new Set([3,4,5,6,7]);

const union = new Set([...set1, ...set2]); // set => array spread syntax 사용
const intersection = new Set([...set1].filter(x => set2.has(x)));
const difference1 = new Set([...set1].filter(x => !set2.has(x)));
const difference2 = new Set([...set2].filter(x => !set1.has(x)));
const symmetricDifference = new Set([...difference1, ...difference2]);

const isSuperSet = function (superset, subset) {
  for (let element of subset) if (!superset.has(element)) false;
  return true;
}

console.log("union", union);
console.log("intersection", intersection);
console.log("difference1", difference1);
console.log("difference2", difference2);
console.log("symmetricDifference", symmetricDifference);
console.log(isSuperSet(set1, set2));

const str1 = "abcde";
const str2 = "ade";
console.log(isSuperSet(new Set([...str1]), new Set([...str2]))); // str => arr => set 으로 자료형 전달 후에 메소드에 전달.
console.log(str1.includes(str2));