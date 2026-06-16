// ============================================================
// 101 - Template Literals in Functions
// ============================================================
// Template literals use backticks (`) instead of quotes.
// They let you easily put variables inside a string using ${variable}.
// This is cleaner than using + to join strings.
//
// Think of it like a "fill-in-the-blanks" worksheet - 
// you write the sentence and leave blanks for names/numbers.
// ============================================================

// Function using template literal
function greet(name) {
    return `Hello, ${name}!`;
}

let result = greet("Alice"); // greet("Alice"); -> CALLING  when let = result SAVING AFTER THAT ONLY IT WILL COME  
console.log(result);

// Another example: Multiple variables in a template literal
function introduce(name, age, city) {
    return `My name is ${name}, I am ${age} years old, and I live in ${city}.`;
}

console.log(introduce("Meera", 25, "Chennai"));
console.log(introduce("Bob", 30, "Bangalore"));

// You can also do math inside ${}
function sumMessage(a, b) {
    return `The sum of ${a} and ${b} is ${a + b}`;
}

console.log(sumMessage(5, 3));

// Output:
// Hello, Alice!
// My name is Meera, I am 25 years old, and I live in Chennai.
// My name is Bob, I am 30 years old, and I live in Bangalore.
// The sum of 5 and 3 is 8
