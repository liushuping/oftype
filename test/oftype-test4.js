var oftype = require('../oftype');
var ddt = require('ddt');

ddt.test({
    inputs: [[null, null], 	 	//true
	     [null, Object]],		//true

    outputs: [true, true],

    transform: function(input) {
	return oftype(input[0], input[1], {
	    nullAsObject: true
        });
    },
    
    groupName: 'Test group 4',
});
