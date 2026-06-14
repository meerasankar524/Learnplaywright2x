/**
 * ============================================================
 * JAVASCRIPT STRING METHODS — CHEAT SHEET
 * Chapter 13: Strings
 * ============================================================
 * Run this file with Node.js to see the live table in your console.
 * ============================================================
 */

const sample = "Hello World";

const stringCheatSheet = [
    // Accessor / Extraction Methods
    { Method: "charAt(index)",                  Description: "Returns character at given index",                                    Example: `"Hello".charAt(1)`,                  Output: `"Hello".charAt(1) === "e"` },
    { Method: "charCodeAt(index)",              Description: "Returns UTF-16 code of character at index",                             Example: `"Hello".charCodeAt(0)`,              Output: `"Hello".charCodeAt(0) === 72` },
    { Method: "codePointAt(index)",            Description: "Returns Unicode code point at index",                                   Example: `"🎉".codePointAt(0)`,              Output: `"🎉".codePointAt(0) === 127881` },
    { Method: "at(index)",                      Description: "Returns character at index (supports negatives)",                       Example: `"Hello".at(-1)`,                   Output: `"Hello".at(-1) === "o"` },

    // Search / Check Methods
    { Method: "indexOf(search)",                Description: "Returns first index of search string (or -1)",                          Example: `"Hello World".indexOf("o")`,       Output: `"Hello World".indexOf("o") === 4` },
    { Method: "lastIndexOf(search)",            Description: "Returns last index of search string (or -1)",                           Example: `"Hello World".lastIndexOf("o")`,   Output: `"Hello World".lastIndexOf("o") === 7` },
    { Method: "includes(search)",               Description: "Checks if string contains search string",                               Example: `"Hello".includes("ell")`,          Output: `"Hello".includes("ell") === true` },
    { Method: "startsWith(search)",             Description: "Checks if string starts with search string",                            Example: `"Hello".startsWith("He")`,         Output: `"Hello".startsWith("He") === true` },
    { Method: "endsWith(search)",               Description: "Checks if string ends with search string",                              Example: `"Hello".endsWith("lo")`,           Output: `"Hello".endsWith("lo") === true` },
    { Method: "search(regexp)",                 Description: "Returns index of first match with regex",                               Example: `"Hello World".search(/o/)`,        Output: `"Hello World".search(/o/) === 4` },
    { Method: "match(regexp)",                  Description: "Returns array of matches (or null)",                                    Example: `"abc123".match(/\d+/)`,            Output: `"abc123".match(/\d+/) === ["123"]` },
    { Method: "matchAll(regexp)",               Description: "Returns iterator of all matches",                                       Example: `"1a2b3c".matchAll(/\d/g)`,         Output: `"1a2b3c".matchAll(/\d/g) === iterator` },
    { Method: "localeCompare(compare)",         Description: "Compares two strings in sort order",                                    Example: `"a".localeCompare("b")`,         Output: `"a".localeCompare("b") === -1` },

    // Modification / Manipulation Methods
    { Method: "concat(str1, str2, ...)",        Description: "Joins two or more strings",                                             Example: `"Hello".concat(" ", "World")`,    Output: `"Hello".concat(" ", "World") === "Hello World"` },
    { Method: "slice(start, end)",              Description: "Extracts a section of the string",                                    Example: `"Hello".slice(1, 4)`,              Output: `"Hello".slice(1, 4) === "ell"` },
    { Method: "substring(start, end)",          Description: "Extracts characters between two indices",                               Example: `"Hello".substring(1, 4)`,          Output: `"Hello".substring(1, 4) === "ell"` },
    { Method: "substr(start, length)",          Description: "Extracts characters from start for given length",                       Example: `"Hello".substr(1, 3)`,             Output: `"Hello".substr(1, 3) === "ell"` },
    { Method: "split(separator)",              Description: "Splits string into an array by separator",                            Example: `"a,b,c".split(",")`,             Output: `"a,b,c".split(",") === ["a","b","c"]` },
    { Method: "replace(search, replace)",       Description: "Replaces first match with replacement",                               Example: `"Hello".replace("l", "x")`,      Output: `"Hello".replace("l", "x") === "Hexlo"` },
    { Method: "replaceAll(search, replace)",    Description: "Replaces all matches with replacement",                               Example: `"Hello".replaceAll("l", "x")`,   Output: `"Hello".replaceAll("l", "x") === "Hexxo"` },
    { Method: "toLowerCase()",                  Description: "Converts all characters to lowercase",                                  Example: `"HELLO".toLowerCase()`,          Output: `"HELLO".toLowerCase() === "hello"` },
    { Method: "toUpperCase()",                  Description: "Converts all characters to uppercase",                                  Example: `"hello".toUpperCase()`,          Output: `"hello".toUpperCase() === "HELLO"` },
    { Method: "toLocaleLowerCase()",            Description: "Converts to lowercase based on locale",                               Example: `"İSTANBUL".toLocaleLowerCase()`, Output: `"İSTANBUL".toLocaleLowerCase() === "istanbul"` },
    { Method: "toLocaleUpperCase()",            Description: "Converts to uppercase based on locale",                                 Example: `"istanbul".toLocaleUpperCase()`, Output: `"istanbul".toLocaleUpperCase() === "İSTANBUL"` },
    { Method: "trim()",                        Description: "Removes whitespace from both ends",                                     Example: `"  hello  ".trim()`,              Output: `"  hello  ".trim() === "hello"` },
    { Method: "trimStart() / trimLeft()",       Description: "Removes whitespace from the start",                                   Example: `"  hello  ".trimStart()`,        Output: `"  hello  ".trimStart() === "hello  "` },
    { Method: "trimEnd() / trimRight()",        Description: "Removes whitespace from the end",                                     Example: `"  hello  ".trimEnd()`,          Output: `"  hello  ".trimEnd() === "  hello"` },
    { Method: "padStart(targetLength, pad)",    Description: "Pads the start until string reaches target length",                     Example: `"5".padStart(3, "0")`,           Output: `"5".padStart(3, "0") === "005"` },
    { Method: "padEnd(targetLength, pad)",      Description: "Pads the end until string reaches target length",                       Example: `"5".padEnd(3, "0")`,             Output: `"5".padEnd(3, "0") === "500"` },
    { Method: "repeat(count)",                 Description: "Repeats the string given number of times",                              Example: `"ha".repeat(3)`,                   Output: `"ha".repeat(3) === "hahaha"` },
    { Method: "normalize()",                    Description: "Returns Unicode Normalization Form",                                    Example: `"é".normalize()`,                  Output: `"é".normalize() === "é"` },

    // Conversion / Utility Methods
    { Method: "toString()",                     Description: "Returns the string value",                                              Example: `(123).toString()`,                 Output: `(123).toString() === "123"` },
    { Method: "valueOf()",                      Description: "Returns the primitive value of string object",                          Example: `new String("hi").valueOf()`,       Output: `new String("hi").valueOf() === "hi"` },
];

// Display the cheat sheet as a live table in the console
console.log("%c📋 JavaScript String Methods Cheat Sheet", "font-size: 16px; font-weight: bold; color: #2c3e50;");
console.log("%cChapter 13 — Strings", "font-size: 12px; color: #7f8c8d;");
console.table(stringCheatSheet);

// ============================================================
// BONUS: Quick Reference (Static Methods)
// ============================================================
const staticMethods = [
    { Method: "String.fromCharCode(num1, ...)", Description: "Creates string from UTF-16 code units", Example: `String.fromCharCode(72, 105)`, Output: `String.fromCharCode(72, 105) === "Hi"` },
    { Method: "String.fromCodePoint(num1, ...)", Description: "Creates string from code points", Example: `String.fromCodePoint(128515)`, Output: `String.fromCodePoint(128515) === "😃"` },
    { Method: "String.raw(strings, ...values)", Description: "Returns raw string from template literal", Example: `String.raw\`Hi\\nYou\``, Output: `String.raw\`Hi\\nYou\` === "Hi\\nYou"` },
];

console.log("%c\n📋 Static String Methods", "font-size: 14px; font-weight: bold; color: #2c3e50;");
console.table(staticMethods);

// ============================================================
// HOW TO USE THIS FILE
// ============================================================
// 1. Open terminal in this folder.
// 2. Run: node JS_Str_cheat_sheet_fn.js
// 3. See the table printed in your console.
// ============================================================
