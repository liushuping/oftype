oftype
======

A JavaScript module for checking variable runtime type

[![build status](https://travis-ci.org/liushuping/oftype.svg)](https://travis-ci.org/liushuping/oftype.svg)

## Usage
```javascript
var oftype = require('oftype');
var x = 123;
var y = true;
var z = /abc/;
var u = undefined;
var n = null;

function Obj() {
    this.name = 'ABC';
}

var o = new Obj();

//check if variable x is of Number type.
oftype(123, Number); //true

//check if variable y is of Boolean type.
oftype(y, Boolean); //true

//check if variable z is of RegExp type.
oftype(z, RegExp); //true

//check if variable u is of undefined type.
//undefined is a type which has an only value undefined.
oftype(u, undefined); //true

//check if variable n is of null type.
//stricly, null is no actually a type, but here we treat
// it as a type just like how we treat undefined.
oftype(n, null); //true;

//check if variable o is of Obj type.
oftype(o, Obj); //true;

//check if variable o is of Object type.
oftype(o, Object); //true;

```

## API
The signature of `oftype` is
```javascript
oftype(value, type, options);
```
`value`: could be any variable or value;

* `type`: could be any type identifier, e.g.: Number, Boolean, String, Date, RegExp, Array, Object and any other customized complex type.

* `options` is optional and has below hash values:

 * `nullAsObject`: treat `null` value as `Object` type, so with this option testing `null` against `Object` type returns `true`. Default value of this option is `false`.

 * `primitiveObject`: treat primitive object as primitive type. for example, testing `new Number(1)` against Number will return `false` when this option is set to `false`; but will return `true` when this option is set to `true`.

Alternatively, to avoid setting the options in every function call, the options could also be set globally:
```javascript
oftype.nullAsObject = true;
oftype.primitiveObject = true;
```
## Test
Make sure `mocha` is installed globally

```
npm test
```

## License
MIT
