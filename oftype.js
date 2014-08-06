function oftype(val, type) {
    if (type === undefined || type === null ||
	val === undefined || val === null) {
	return type === val;

    } else if (type === Number) {
	return typeof val === 'number';

    } else if (type === String) {
	return typeof val === 'string';

    } else if (type === Boolean) {
	return typeof val === 'boolean';

    } else {
	return type instanceof Function &&
	       val instanceof type;
    }
}

module.exports = oftype;
