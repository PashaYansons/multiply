module.exports = function multiply(first, second) {
  let result = 0; 

	result = BigInt(first) * BigInt(second);

	return result.toString();
}
