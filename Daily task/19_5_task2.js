//finding Maz num between  3 numbers using ternary operator
// have to use nested condition


// let age = 26;
// let meera = age > 18 ? (age >= 26 ? "can drink" : "cannot drink") : "No tour"
// console.log(meera);

let a = 33;
let b = 658;
let c = 234;

//let max = a >= b ? "a" : (b >= c ? "b" : "c") my thinking
let max = a >= b ? (a >= c ? "a" : "c") : (b >= c ? "b" : "c"); // opencode help......
console.log("Maximum num is " + max);
