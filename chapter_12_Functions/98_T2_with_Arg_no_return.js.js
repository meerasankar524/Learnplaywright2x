// ============================================================
// 98 - TYPE 2: Function WITH Arguments, NO Return
// ============================================================
// This function takes INPUT (arguments/parameters) but does NOT return anything.
// It uses the input to do something, like printing a custom message.
//
// Think of it like a "vending machine" - you put in money (input), 
// it gives you a snack (action), but doesn't give you change back.
// ============================================================

// Define: A function with ONE parameter (name)
// "name" is like a placeholder - it will be filled when we call the function
function greetByName(name) {
    console.log("Hello, " + name + "!");
}

// Call with different names (arguments)
greetByName("Meera");
greetByName("Venkatesh");

// Since there is NO return, saving the result gives "undefined"
let result = greetByName("Alice");
console.log("Result:", result);  // undefined

// Another example: A function that takes a number
function sayThanks(money) {
    console.log("Thanks for the " + money + " rupees!");
}

sayThanks(100);
sayThanks(500);

// Output:
// Hello, Meera!
// Hello, Venkatesh!
// Hello, Alice!
// Result: undefined
// Thanks for the 100 rupees!
// Thanks for the 500 rupees!
