// for loop : iterate through prices : array
// if : current price is lower than the minimum price, update the minimum price
// else : current price is higher than the minimum price
// check if this profit is higher than the maximum profit
// if it is, update the maximum profit!
function maxProfit(prices) {
	let minPrice = Infinity;
	let maxProfit = 0;

	for(let i = 0; i < prices.length ; i++){
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		} else {
			if (prices[i] - minPrice > maxProfit) {
				maxProfit = prices[i] - minPrice;
			}
		}
	}

	return maxProfit;
}
// minimum price 와 maxProfit 을 매 index 마다 비교해서 갱신한다는 것이 포인트!
// 모든 for loop 에서 minimum price 와 maxProfit 을 가지고 있는다. 함수가 마쳤을 때 maximum 을 찾아서 리턴
// 내려가는 구간에서는 계속해서 minimum Price 가 갱신되는 것이고
// 올라가는 구간에 대해서 profit 을 계속해서 비교해서 더 높은 profit 이 나오면 갱신하면 된다. 


/* Math.max, Math.min*/
// function maxProfit(prices) {
// 	let minPrice = Infinity;
// 	let maxProfit = 0;
// 	for (let i = 0; i < prices.length; i++) {
// 		minPrice = Math.min(prices[i], minPrice);
// 		maxProfit = Math.max(prices[i] - minPrice, maxProfit);		
// 	}
// 	return maxProfit;
// }



console.log(maxProfit([1,7,6,4,3,1]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([7,1,5,4,6,4]));
console.log(maxProfit([90,100,2,1,7,1,5,9,6,4]));
console.log(maxProfit([3,3,3,3,3,4]));
console.log(maxProfit([3]));
console.log(maxProfit([3, 3]));
console.log(maxProfit([]));
console.log(maxProfit([8,3,3,6,10,1,2]));
console.log(maxProfit([8,4,5,6,10,9,1,7]));
console.log(maxProfit([8,4,5,6,10,9,8,7]));
console.log(maxProfit([3,8,7,6,5,1,2]));
console.log(maxProfit([2,4,1]));