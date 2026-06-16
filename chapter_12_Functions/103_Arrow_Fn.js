// ============================================================
// 103 - Arrow Functions (=>) - The Short Way to Write Functions
// ============================================================
// Arrow functions are just a SHORTER way to write functions.
// They use the "=>" symbol (like an arrow) instead of the "function" keyword.
//
// Why use them? Less typing, cleaner code!
// ============================================================

// ---------------------------------------------------------------
// NORMAL FUNCTION (the long way)
// ---------------------------------------------------------------
function addNormal(a, b) {
    return a + b;
}
console.log("Normal:", addNormal(2, 3));  // 5

// ---------------------------------------------------------------
// ARROW FUNCTION (the short way)
// ---------------------------------------------------------------
// Step 1: Remove the word "function"
// Step 2: Add "=>" after the parameters
// Step 3: If it's one line, you can skip "return" and "{}"
const addArrow = (a, b) => a + b;
console.log("Arrow:", addArrow(2, 3));  // 5

// ---------------------------------------------------------------
// MORE EXAMPLES
// ---------------------------------------------------------------

// 1. One parameter → you can skip the ()
const double = n => n * 2;
console.log("Double of 5:", double(5));  // 10

// 2. No parameters → use empty ()
const sayHi = () => "Hi there!";
console.log(sayHi());  // Hi there!

// 3. Multiple lines → use {} and "return"
const greet = (name) => {
    const message = "Hello, " + name + "!";
    return message;
};
console.log(greet("Meera"));  // Hello, Meera!

// 4. Just printing (no return)
const printName = name => console.log("Name:", name);
printName("Dutta");  // Name: Dutta

// ---------------------------------------------------------------
// SUMMARY TABLE
// ---------------------------------------------------------------
//
// | Type              | Syntax                          |
// |-------------------|---------------------------------|
// | Normal function   | function name() { return x; }  |
// | Arrow (1 line)    | const name = () => x;           |
// | Arrow (multi-line)| const name = () => { return x; }|
// | 1 parameter       | const name = a => a * 2;        |
// | 0 parameters      | const name = () => "Hi";        |
//
// ---------------------------------------------------------------

// Output:
// Normal: 5
// Arrow: 5
// Double of 5: 10
// Hi there!
// Hello, Meera!
// Name: Dutta
