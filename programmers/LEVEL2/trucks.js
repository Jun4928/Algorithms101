const solution = function bridgeTrucks (bridge_length, weight, truck_weights) {
  let beforeBridgeLength = truck_weights.length; //  다리 지나기 전 트럭 개수
  let afterBridgeLength = 0; // 다리를 지나고 난 트럭 개수

  let seconds = 1;
  let onBridge = [{ truckWeight: truck_weights.shift(), times: bridge_length - 1 }];  
  // 진입 한 순간에 1초 감소

  // 다리를 지난 트럭의 개수와 건너기 전의 개수가 같을 때까지
  while (afterBridgeLength !== beforeBridgeLength) {
    console.log(seconds, onBridge); // 현재 시간과 다리에 있는 트럭들

    // 다리의 첫번째 있는 트럭의 시간이 다 흘렀으면 다리에서 dequeue
    if (onBridge[0].times === 0) {
      afterBridgeLength += 1; // 다리를 지난 트럭개수 증가
      onBridge.shift();
    }

    // ===== 1초 증가 할 때 로직 =====
    seconds += 1; 
    let currentWeight = 0; 
    onBridge = onBridge.map((truck) => {  // 현재 시점의 다리에 올라 와 있는 트럭의 무게를 더한다.
      const {truckWeight, times} = truck;
      currentWeight = currentWeight + truckWeight;
      return {...truck, times: times - 1}; // 모든 트럭의 걸리는 시간 1초식 감소
    });

    // 현재 다리위 무게 + 대기열 중 첫번째 트럭의 무게가 다리 weight 와 작거나 같아야
    // 트럭이 다리에 올라올 수 있다.
    if (currentWeight + truck_weights[0] <= weight) { 
      const truck = { truckWeight: truck_weights.shift(), times: bridge_length - 1 }; 
      // 진입한 순간에 1초 감소
      onBridge.push(truck); // 트럭 진입
    } 
  }

  return seconds; 
}


const result1 = solution(2, 10, [7, 4, 5, 6]);  // 8
console.log(result1);
// const result2 = solution(100, 100, [10]);  // 101
// console.log(result2);
// const result3 = solution(100, 100, [10,10,10,10,10,10,10,10,10,10]);  // 110
// console.log(result3);