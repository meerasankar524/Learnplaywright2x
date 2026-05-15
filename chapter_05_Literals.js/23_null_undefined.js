// null vs undefined vs empty in JavaScript
// 
// Definition:
// undefined = a variable exists but has no value yet (JS sets this automatically)
// null      = a value that you intentionally set to mean "nothing"
// empty     = a real value (string, array, etc.) that simply has no content

// 1. undefined
// When you declare a variable but do not assign anything to it, JS gives it undefined.
let a;
console.log("undefined example:", a); // undefined

// 2. null
// You use null when you want to say "this variable should have nothing in it" on purpose.
let b = null;
console.log("null example:", b); // null

// 3. empty
// An empty value is still a real value. It just has no characters or items inside it.
let c = "";
console.log("empty string example:", c); // ""

let d = [];
console.log("empty array example:", d); // []

// Comparison
console.log("null == undefined:", null == undefined);  // true
console.log("null === undefined:", null === undefined); // false
