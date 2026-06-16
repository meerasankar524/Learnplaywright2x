// ============================================================
// 104 - Function Comparison Table (Compact Version)
// ============================================================

// ---------------------------------------------------------------
// TABLE: Add Two Numbers (Same Logic, 3 Different Ways)
// ---------------------------------------------------------------

// 1. NORMAL FUNCTION
function addNormal(a, b) {
    return a + b;
}

// 2. FUNCTION EXPRESSION
const addExpression = function(a, b) {
    return a + b;
};

// 3. ARROW FUNCTION
const addArrow = (a, b) => a + b;

// Print Results
console.log("=== FUNCTION COMPARISON TABLE ===");
console.log("");
console.log("| # | Type       | Code                                       | Output |");
console.log("|---|------------|--------------------------------------------|--------|");
console.log("| 1 | Normal     | function add(a,b) { return a+b; }         |", addNormal(2, 3), "      |");
console.log("| 2 | Expression | const add = function(a,b) { return a+b; } |", addExpression(2, 3), "      |");
console.log("| 3 | Arrow      | const add = (a,b) => a+b;                  |", addArrow(2, 3), "      |");
console.log("");

// ---------------------------------------------------------------
// TABLE: One Parameter (name => greeting)
// ---------------------------------------------------------------

function greetNormal(name) { return "Hi " + name; }
const greetExpression = function(name) { return "Hi " + name; };
const greetArrow = name => "Hi " + name;

console.log("=== ONE PARAMETER ===");
console.log("| 1 | Normal     | function greet(name) { return 'Hi '+name; } |", greetNormal("Meera"), "|");
console.log("| 2 | Expression | const greet = function(name) {...}          |", greetExpression("Meera"), "|");
console.log("| 3 | Arrow      | const greet = name => 'Hi '+name;         |", greetArrow("Meera"), "|");
console.log("");

// ---------------------------------------------------------------
// TABLE: No Parameters
// ---------------------------------------------------------------

function hiNormal() { return "Hello"; }
const hiExpression = function() { return "Hello"; };
const hiArrow = () => "Hello";

console.log("=== NO PARAMETERS ===");
console.log("| 1 | Normal     | function hi() { return 'Hello'; }           |", hiNormal(), "  |");
console.log("| 2 | Expression | const hi = function() { return 'Hello'; }   |", hiExpression(), "  |");
console.log("| 3 | Arrow      | const hi = () => 'Hello';                  |", hiArrow(), "  |");
console.log("");

// ---------------------------------------------------------------
// TABLE: Arrow Function Shortcut Rules
// ---------------------------------------------------------------

console.log("=== ARROW FUNCTION SHORTCUTS ===");
console.log("| Situation     | Arrow Syntax              | Example             |");
console.log("|---------------|---------------------------|---------------------|");
console.log("| 2+ parameters | (a, b) => a + b           | (a, b) => a + b     |");
console.log("| 1 parameter   |  a => a * 2              | name => 'Hi '+name  |");
console.log("| 0 parameters  |  () => 'Hello'           | () => 'Hello'       |");
console.log("| Multi-line    |  (a, b) => { return ... } | (a, b) => { ... }   |");
console.log("");
console.log("All 3 types do the same job! Arrow is just shorter.");
