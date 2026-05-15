// All Number Types / Literal Forms in JavaScript
//
// JavaScript has a single Number type (IEEE 754 double-precision float).
// However, numbers can be written in many different literal forms.

// 1. Integer literal
let intNum = 42;
console.log("Integer:", intNum);

// 2. Floating-point literal
let floatNum = 3.14;
console.log("Float:", floatNum);

// 3. Negative number (unary minus applied to a literal)
let negNum = -99;
console.log("Negative:", negNum);

// 4. Scientific notation (exponential)
let sciNum = 1.2e3;   // 1200
let tinyNum = 4e-2;   // 0.04
console.log("Scientific (1.2e3):", sciNum);
console.log("Scientific (4e-2):", tinyNum);

// 5. Hexadecimal (base 16) - prefix 0x or 0X
let hexNum = 0xFF;    // 255
console.log("Hexadecimal (0xFF):", hexNum);

// 6. Binary (base 2) - prefix 0b or 0B
let binNum = 0b1010;  // 10
console.log("Binary (0b1010):", binNum);

// 7. Octal (base 8) - prefix 0o or 0O
let octNum = 0o17;    // 15
console.log("Octal (0o17):", octNum);

// 8. Numeric separators (ES2021) - underscores for readability
let sepNum = 1_000_000;
console.log("With separators (1_000_000):", sepNum);

// 9. BigInt - arbitrary-precision integers, suffix with n
let bigNum = 9007199254740991n;
console.log("BigInt:", bigNum);

// 10. Special numeric values
console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN (Not-a-Number):", NaN);


// 11. Decimal - Base 10 (default)
let decNum = 12345;
console.log("Decimal:", decNum);

