var exports = module.exports = {};
exports.dataTypes = function(argument) {
	let type = typeof argument;
	let result;

	switch (type) {
		case 'string': {
			result = argument.length;
			break;
		}
		case 'undefined': {
			result = 'no value';
			break;
		}
		case 'boolean': {
			result = argument;
			break;
		}
		case 'number': {
			if (argument < 100) {
				result = 'less than 100';
			} else if (argument > 100) {
				result = 'more than 100';
			} else {
				result = 'equal to 100';
			}
			break;
		}

		case 'object': {
			if (argument == null) {
				result = 'no value';
			} else if (argument instanceof Array) {
				if (argument[2]) {
					result = argument[2];
				} else {
					result = undefined;
				}
			}
			break;
		}

		case 'function': {
			result = argument(true);
			break;
		}
	}
	return result;
}