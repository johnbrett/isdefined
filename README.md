isdefined
=========

There is a nice feature of JSON.stringify that removes undefined object properties which works as follows:
````javascript
var obj: {
  a: 'test',
  b: null,
  c: undefined
}

console.log(JSON.stringify(obj)) // '{"a":"test","b":null}'
````

This makes for handy formatting of JSON when responding to requests. This module provides some utility methods for working with undefined object properties, so if you're sick of writing or seeing `typeof x !== undefined` multiple times in your codebase when using the above method to format JSON, this module comes in handy.

Usage:
````javascript
var defined = require('isdefined')

var x = {
  a: true
}

console.log(defined.is_defined(x.a)) // true

console.log(defined.is_defined(x.b)) // false

console.log(defined.boolean_to_binary(x.a)) // 1 /* handy for when 1 or 0 is used for storing true/false */

console.log(defined.boolean_to_binary(x.b)) // undefined

// useful for the likes of this statement:
var test = typeof x['a'] !== 'undefined' ? (i['active'] == 1) : undefined
// converts to
var test = defined.binary_to_boolean(x['a'])
````
