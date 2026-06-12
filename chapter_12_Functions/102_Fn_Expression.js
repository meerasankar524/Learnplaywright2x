// ============================================================
// 102 - Function Expression
// ============================================================
// A function expression is when you store a function inside a variable.
// Instead of giving the function a name after "function",
// you give the variable a name.
//
// Think of it like "naming a box" instead of "naming the toy inside".
// The box (variable) holds the function.
// ============================================================

// Function Expression: Store function in a variable
const sayHello = function(name) {
    return "Hello, " + name;
};

// Call it using the variable name
console.log(sayHello("Meera"));

// Another example: Function expression with return
const add = function(a, b) {
    return a + b;
};

console.log("10 + 5 =", add(10, 5));

// You can also have a function expression without parameters
const showMessage = function() {
    console.log("This is a function expression with no parameters!");
};

showMessage();

// Output:
// Hello, Meera
// 10 + 5 = 15
// This is a function expression with no parameters!
