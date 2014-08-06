var oftype = require('../oftype');
var ddt = require('ddt');

var config = {
    inputs: [[null, null], 	 	//true
	     [null, Object]],		//true

    outputs: [true, true],

    transform: function(input) {
	return oftype(input[0], input[1]);
    },
    
    validate: function(expected, actual) {
	return expected == actual;
    }
};

oftype.nullAsObject = true;
ddt.test(config);
