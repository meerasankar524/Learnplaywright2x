//CHECKING Array

//Checks if something is Array

let r = Array.isArray([1, 2, 3]);
console.log(r);

let s = Array.isArray("a");
console.log(s);


//Every & Some

let c = [80, 90, 85].every(s => s >= 70);
let d = [80, 60, 85].every(s => s >= 70);


//Playwright API

[200, 201, 204].every(statuscode => statuscode > 200);

//Some - ATLEAST one must pass
let a = [80, 90, 85].some(s => s < 70);
let b = [80, 60, 85].some(s => s < 70);

console.log(a);
console.log(b);
console.log(c);
console.log(d);