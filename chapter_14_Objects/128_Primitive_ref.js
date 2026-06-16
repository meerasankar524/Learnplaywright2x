// Primitive vs Reference types 

let a = 10;
let b = a;
b = 99;
console.log(a);
// creates the new value

// Objects => Copied by ReferenceError, call by ref
//  Reference => Object , Array, Function

let obj1 = { val: 10};
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);

//  copy the value 


