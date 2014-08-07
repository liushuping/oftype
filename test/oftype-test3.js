var oftype = require('../oftype');
var ddt = require('ddt');

ddt.test({
    inputs: [[new Number(1), Number],
	     [1, Number],
	     [new String('x'), String],
	     ['x', String],
	     [new Boolean(true), Boolean],	
	     [true, Boolean]],	

    outputs: [false, true, false, true, false, true],

    transform: function(input) {
	return oftype(input[0], input[1]);
    },
    
    groupName: 'Test group 3',

    before: function() {
	oftype.primitiveObject = false;
    }
});
