// ==========================================
// JavaScript Identifier Rules Examples
// ==========================================

// Rule 1: Must start with a letter, underscore (_), or dollar sign ($)
let validName = "starts with letter";
let _privateVar = "starts with underscore";
let $jqueryStyle = "starts with dollar sign";

// Invalid: Cannot start with a digit
// let 1stPlace = "error"; // SyntaxError: Invalid or unexpected token

// Rule 2: Subsequent characters can be letters, digits (0-9), underscores, or dollar signs
let name1 = "letter then digit";
let first_name = "letters with underscore";
let price$ = "letters with dollar sign";
let _temp123$ = "mix of underscore, letters, digits, dollar";

// Rule 3: Cannot be a reserved keyword
// let let = "error";     // SyntaxError
// let class = "error";   // SyntaxError
// let return = "error";  // SyntaxError
// let function = "error"; // SyntaxError

// Rule 4: Cannot contain spaces
let firstName = "camelCase - no spaces";
// let first name = "error"; // SyntaxError: Unexpected identifier

// Rule 5: Identifiers are case-sensitive
let myVariable = "lowercase m";
let MyVariable = "uppercase M";
let MYVARIABLE = "all uppercase";
console.log("Case-sensitive:", myVariable, MyVariable, MYVARIABLE);

// Rule 6: Unicode letters and escape sequences are allowed
let 变量 = "Chinese characters";
let переменная = "Cyrillic characters";
let Café = "Unicode escape sequence (é)";
let \u0041 = "Escaped letter A";
console.log("Unicode examples:", 变量, переменная, Café);

// Rule 7: No length limit (but keep them reasonable for readability)
let a = "one char";
let thisIsAVeryLongVariableNameThatIsTechnicallyValidInJavaScriptAndCanGoOnAndOn = "very long but valid";

// ==========================================
// Demonstration: Print all valid identifiers
// ==========================================
console.log("Valid Identifiers Demo:");
console.log("validName:", validName);
console.log("_privateVar:", _privateVar);
console.log("$jqueryStyle:", $jqueryStyle);
console.log("name1:", name1);
console.log("first_name:", first_name);
console.log("price$:", price$);
console.log("_temp123$:", _temp123$);
console.log("firstName:", firstName);
console.log("myVariable:", myVariable);
console.log("MyVariable:", MyVariable);
console.log("MYVARIABLE:", MYVARIABLE);
console.log("变量:", 变量);
console.log("переменная:", переменная);
console.log("Caf\u00E9:", Café);
console.log("a:", a);
console.log("Long var:", thisIsAVeryLongVariableNameThatIsTechnicallyValidInJavaScriptAndCanGoOnAndOn);

// ==========================================
// Invalid Identifiers (commented out to prevent errors)
// ==========================================

// ❌ Starts with number:
// let 2beOrNot2Be = "error";

// ❌ Contains space:
// let user name = "error";

// ❌ Contains special characters other than _ and $:
// let first-name = "error";   // hyphen not allowed
// let user@name = "error";    // @ not allowed
// let price# = "error";       // # not allowed

// ❌ Reserved keywords:
// let if = "error";
// let while = "error";
// let break = "error";
// let const = "error";
