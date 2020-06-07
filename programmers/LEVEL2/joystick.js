const joystick = (name) => {
  if (!name) return 0;

  // ascii 코드로 변환 후, 조이스틱의 위 아래로 알파벳을 맞추는데 드는 비용을 구하기
  const ascii = [...name].map((char) => char.charCodeAt()) 
  const eachCost = ascii.map((num) => {
    if (num <= 78) return num - 65; // A-M 까지 위 방향키
    if (num > 78) return 91 - num; // O-z 까지 아래 방향키
  });
  const totalEachCost = eachCost.reduce((acc, num) => acc + num , 0); 
  // 조이스틱의 위 아래 조종하는데 드는 비용

  // 조이스틱의 왼쪽, 오른쪽 커서를 이동하는데 드는 비용 구하기
  // 'A'는 조작할 필요가 없으니 뛰어 넘는것이 포인트 
  const toRight = (arr, idx) => { // 오른쪽으로 이동 할 때,
    let length = 0;
    while (arr[idx] === 0) { // 0이 아니면 조작해야 할 곳을 찾은 것!
      length += 1;
      idx = idx < arr.length - 1 ? idx + 1 : 0; // 배열의 오른쪽 끝을 만나면 처음으로
    }

    return [length, idx]; // 가야 할 거리와 인덱스를 리턴
  };

  const toLeft = (arr, idx) => { // 왼쪽으로 이동 할 때,
    let length = 0;
    while (arr[idx] === 0) { // 0이 아니면 조작해야 할 곳을 찾은 것!
      length += 1;
      idx = idx > 0 ? idx - 1 : arr.length - 1; // 배열의 왼쪽 끝을 만나면 다시 뒤로
    }

    return [length, idx]; // 가야 할 거리와 인덱스를 리턴
  };

  let path = [...eachCost];
  path[0] = 0; // 
  let pathIdx = 0; // 처음시작은 배열의 시작 
  let shortestPath = 0; // 최종으로 짧은 조작을 저장할 변수
  while (path.some(value => value !== 0)) { // 배열에 0이 남아있을 때 까지 아래 로직을 실행한다. 
    const [rightLength, rightIndex] = toRight(path, pathIdx); // 오른쪽으로 갔을 때 드는 비용
    const [leftLength, leftIndex] = toLeft(path, pathIdx); // 왼쪽으로 갔을 때 드는 비용

    shortestPath += leftLength < rightLength ? leftLength : rightLength; // 비교해서 작은 값을 더하기 
    pathIdx = leftLength < rightLength ? leftIndex : rightIndex; // index 이동하기
    path[pathIdx] = 0; // 검사했으면 배열의 값을 0 으로 만들기
  }

  return shortestPath + totalEachCost;
};


console.log(joystick("JAZ"));
console.log(joystick("JAN"));
console.log(joystick("JEROEN"));
console.log(joystick("JAZAAAB"));
console.log(joystick(""));
console.log(joystick("BBBBAAAAB"));
console.log(joystick("AAABAAAA"));