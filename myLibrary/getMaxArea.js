const getMaxArea = function (heights) {
	let maxArea = -Infinity;

	heights.forEach((height1, x1) => {
		const restHeights = heights.slice(x1 + 1);

		restHeights.forEach((height2, x2) => {
			const currentArea = (x2 + 1) * Math.min(height1, height2);
			maxArea = Math.max(maxArea, currentArea); 
		});;
	});

	return maxArea;
}

console.log(getMaxArea([1,8,6,2,5,4,8,3,7]));
