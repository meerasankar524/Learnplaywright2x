// ============================================================
// 103 - Arrow Function (=>)
// ============================================================
// Arrow functions are a shorter way to write functions.
// They use the "=>" symbol (like an arrow).
//
// Think of it like "shortcut texting" - same meaning, less typing!
//
// Syntax: (parameters) => { code }
// ============================================================

// Basic arrow function (one parameter)
const greet = (name) => {
    return "Hello, " + name;
};

console.log(greet("Meera"));

// Arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
};

console.log("5 + 3 =", add(5, 3));

// SHORTCUT: If the function has ONLY ONE line with return,
// you can skip the {} and the "return" keyword!
const multiply = (a, b) => a * b;

console.log("4 * 5 =", multiply(4, 5));

// SHORTCUT: If there is only ONE parameter, 
// you can skip the () around it!
const square = num => num * num;

console.log("Square of 6 =", square(6));

// Arrow function with NO parameters
const sayHi = () => "Hi there!";

console.log(sayHi());

// Output:
// Hello, Meera
// 5 + 3 = 8
// 4 * 5 = 20
// Square of 6 = 36
// Hi there!
