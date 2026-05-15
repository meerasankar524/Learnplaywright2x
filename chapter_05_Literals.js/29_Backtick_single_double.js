// Single quotes, Double quotes, and Backticks in JavaScript
//
// Rule of thumb:
// - Single '  and  Double "  quotes are the SAME in JS.
// - Backticks `  are different — they are template literals.

// 1. Single quotes
let single = 'Hello World';
console.log("Single quotes:", single);

// 2. Double quotes
let double = "Hello World";
console.log("Double quotes:", double);

// Both single and double quotes work identically.
// Use whichever you prefer, but stay consistent.

// 3. Backticks (Template Literals)
// - Allow embedding variables directly inside the string
// - Allow multi-line strings easily
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log("Backtick with variable:", greeting);

let multi = `Line one
Line two
Line three`;
console.log("Backtick multi-line:", multi);

// Quick comparison table
// | Feature                | 'Single' | "Double" | `Backtick` |
// |------------------------|----------|----------|------------|
// | Same value             | Yes      | Yes      | Yes        |
// | Multi-line             | No       | No       | Yes        |
// | Embed variables ${var} | No       | No       | Yes        |
// | Embed expressions      | No       | No       | Yes        |

console.log("\n--- Quick Comparison ---");
console.log("'hello' === \"hello\":", 'hello' === "hello"); // true
console.log("typeof `text`:", typeof `text`);               // string

let price = 100;
console.log("Backtick expression:", `Total: $${price * 2}`); // Total: $200
