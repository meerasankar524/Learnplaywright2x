// ============================================================
// 100 - TYPE 4: Function WITH Parameters AND WITH Return
// ============================================================
// This is the most useful type of function.
// It takes INPUT (parameters) and gives back OUTPUT (return).
//
// Think of it like a "calculator" - you give it two numbers,
// it adds them and gives you the result.
// ============================================================

// Define: A function with TWO parameters and a return
function sum(a, b) {
    return a + b;
}

// Call the function and save the result
let result1 = sum(4, 5);
console.log("4 + 5 =", result1);

// Call with different numbers
let result2 = sum(10, 20);
console.log("10 + 20 =", result2);

// You can also use the function directly in console.log
console.log("100 + 200 =", sum(100, 200));

// Another example: A function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

console.log("3 * 4 =", multiply(3, 4));

// Output:
// 4 + 5 = 9
// 10 + 20 = 30
// 100 + 200 = 300
// 3 * 4 = 12
