// creating ARRAYS

let fruits = ["apple", "orange", "cherry"]; //preffered way

// Another way -> Array CONSTRUCTOR it will create empty array first

let scores = new Array(3); //this will create empty array  (3) -> is a length of an array (size)
scores[0] = 1;
scores[1] = 1;
scores[2] = 1; // that is an empty array we need to fill the value
let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);

//new Array
let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

//Array.of
let test = Array.of(10, 20, 30, 40);
console.log(test);

//Array.from

let chars = Array.from("Hello"); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(chars);



