function oftype(val, type) {
    if (type === undefined || type === null ||
	val === undefined || val === null) {
	return type === val;

    } else if (type === Number) {
	if (oftype.primitiveObject) {
	    return toString.call(val) === '[object Number]';
	}

	return typeof val === 'number';

    } else if (type === String) {
	if (oftype.primitiveObject) {
	    return toString.call(val) === '[object String]';
	}

	return typeof val === 'string';

    } else if (type === Boolean) {
	if (oftype.primitiveObject) {
	    return toString.call(val) === '[object Boolean]';
	}

	return typeof val === 'boolean';

    } else {
	return type instanceof Function &&
	       val instanceof type;
    }
}

oftype.nullAsObject = false;
oftype.primitiveObject = true;

module.exports = oftype;
