function oftype(val, type, options) {
    nullAsObject = oftype.nullAsObject;
    primitiveObject = oftype.primitiveObject;

    if (options && (options.nullAsObject !== undefined)) {
	nullAsObject = options.nullAsObject;
    }

    if (options && (options.primitiveObject !== undefined)) {
	primitive = options.primitiveObject;

    }

    if (type === undefined || val === undefined) {
	return type === val;

    } else if (val === null) {
	return type === null || 
               nullAsObject && type === Object;

    } else if (type === Number) {
	if (primitiveObject) {
	    return toString.call(val) === '[object Number]';
	}

	return typeof val === 'number';

    } else if (type === String) {
	if (primitiveObject) {
	    return toString.call(val) === '[object String]';
	}

	return typeof val === 'string';

    } else if (type === Boolean) {
	if (primitiveObject) {
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
