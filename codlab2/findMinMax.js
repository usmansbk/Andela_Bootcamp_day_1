var exports = module.exports = {};
exports.findMinMax = function (array) {
	let sortedArray = array.sort((x, y) => { return x-y;});
	minMaxArray = [];
	minimum = sortedArray[0];
	maximum = sortedArray[sortedArray.length - 1]
	minMaxArray.push(minimum);
	if (minimum !== maximum) {
		minMaxArray.push(maximum);
	}
	return minMaxArray;
}