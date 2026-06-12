// ============================================================
// 97 - TYPE 1: Basic Function (No Arguments, No Return)
// ============================================================
// This is the simplest type of function.
// It does NOT take any input (no arguments/parameters).
// It does NOT give anything back (no return).
// It just does its job and prints something.
//
// Think of it like a "doorbell" - you press it, it rings. That's it.
// ============================================================

// Define: A function with NO parameters and NO return
function greet() {
    console.log("Hi there!");
}

// Call the function
greet();

// IMPORTANT: Since this function does NOT return anything,
// if you try to save its result in a variable, you get "undefined"
let result = greet();
console.log("Result:", result);  // undefined

// Output:
// Hi there!
// Result: undefined
