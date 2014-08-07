var oftype = require('../oftype');
var ddt = require('ddt');

ddt.test({
    inputs: [[undefined, undefined], 	 	//true
	     [undefined, null], 		//false
	     [undefined, Number], 		//false
	     [undefined, 'ab'], 		//false
	     [123, Number], 			//true
	     [new Number(1), Number],		//true
	     [123, undefined], 			//false
	     [123, null], 			//false
	     [123, Boolean], 			//false
	     [123, 123], 			//false
	     [123, '123'], 			//false
	     ['abc', String], 			//true
	     [new String('a'), String],		//true
	     ['abc', 'abc'], 			//false
	     ['abc', Boolean], 			//false
	     ['abc', Object],	 		//false
	     [true, Boolean], 			//true
	     [new Boolean(true), Boolean],	//true
	     [true, Object], 			//false
	     [true, Function], 			//false
	     [null, null], 			//true
	     [null, Function], 			//false
	     [null, Array], 			//false
	     [null, 'null'], 			//false
	     [null, Object], 			//false
	     [[1,2,3], Array], 			//true
	     [new Date, Date],			//true
	     [/abc/, RegExp],			//true
	     [new RegExp('a'), RegExp],		//true
	     [new Obj, Obj],			//true
	     [new Obj, Object],			//true
	     [new Obj, RegExp],			//false
	     [new Obj, Number],			//false
	     [new Obj, 'Obj'],			//false
	     [new Obj, Date]],			//false

    outputs: [true, false, false, false,
	      true, true, false, false, false, false, false,
	      true, true, false, false, false,
	      true, true, false, false,
	      true, false, false, false, false,
	      true, 
	      true,
	      true, true,
	      true, true, false, false, false, false],

    transform: function(input) {
	return oftype(input[0], input[1]);
    },
    
    before: function() {
	oftype.primitiveObject = true;
	oftype.nullAsObject = false;
    },	

    groupName: 'Test group 1'	
});

function Obj() {
    this.name = 'ABC';
}
