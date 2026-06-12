// Slicing & Combining
let arr = [1, 2, 3, 4, 5];
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(1, 3)); // ( start, end-1) 
console.log(arr.slice(2, 4)); // ( start, end-1) 
console.log(arr.slice(2));
console.log(arr.slice(-2));

let ar = [10, 20, 30, 40, 50];
let s = ar.slice(1, 4);   // [20, 30, 40]
console.log(ar);          // [10, 20, 30, 40, 50]  ← unchanged

let a = [10, 20, 30, 40, 50];
let removed = a.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30]
console.log(a);                 // [10, 40, 50]