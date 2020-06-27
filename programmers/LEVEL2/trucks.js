const solution = function bridgeTrucks (bridge_length, weight, truck_weights) {

  let seconds = 1;
  let beforeBridgeLength = truck_weights.length;
  let onBridge = [{ truckWeight: truck_weights.shift(), times: bridge_length - 1 }];  
  // 진입 한 순간에 1초 감소
  let afterBridge = [];

  // 다리를 지난 트럭의 개수와 건너기 전의 개수가 같을 때까지
  while (afterBridge.length !== beforeBridgeLength) {
    let currentWeight = 0; 
    onBridge = onBridge.map((truck) => { // 1초 흐른 것
      const {truckWeight, times} = truck;
      currentWeight = currentWeight + truckWeight;
      return {...truck, times: times - 1};
    });

    // 다리에 첫번째 있는 트럭의 시간이 다 흘렀으면 다리에서 dequeue
    if (onBridge.length != 0 && onBridge[0].times === 0) afterBridge.push(onBridge.shift());

    if (currentWeight + truck_weights[0] <= weight) { // 현재 순간의 weight + 대기열 중 첫번째 트럭의 무게가 다리 weight 와 작거나 같아야
      const truck = { truckWeight: truck_weights.shift(), times: bridge_length - 1 }; 
      // 진입한 순간에 1초 감소
      onBridge.push(truck); // 트럭 진입
    } 

    seconds += 1; // 1초 증가
  }

  return seconds + 1; // 트럭이 최종적으로 다리를 빠져나오고 나서
}


const result1 = solution(2, 10, [7, 4, 5, 6]);  // 8
console.log(result1);
const result2 = solution(100, 100, [10]);  // 101
console.log(result2);
const result3 = solution(100, 100, [10,10,10,10,10,10,10,10,10,10]);  // 110
console.log(result3);