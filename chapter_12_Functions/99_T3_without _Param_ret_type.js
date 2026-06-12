// ============================================================
// 99 - TYPE 3: Function WITHOUT Parameters, WITH Return
// ============================================================
// This function does NOT take any input (no parameters),
// but it DOES give something back (return).
//
// Think of it like a "lucky draw machine" - you don't put anything in,
// but it gives you a prize (return value) back.
// ============================================================

// Define: A function with NO parameters, but WITH return
function getGreetingMessage() {
    return "Welcome to JavaScript!";
}

// Call the function and SAVE the returned value
let message = getGreetingMessage();
console.log(message);

// Another example: A function that returns a fixed number
function getMyAge() {
    return 25;
}

let age = getMyAge();
console.log("My age is:", age);

// You can also use the return value directly in console.log
console.log("Message:", getGreetingMessage());

// Output:
// Welcome to JavaScript!
// My age is: 25
// Message: Welcome to JavaScript!
