const docx = require('docx');
const fs = require('fs');

const { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType, HeadingLevel, AlignmentType, BorderStyle } = docx;

// Helper to create a table cell
function cell(text, options = {}) {
    return new TableCell({
        children: [new Paragraph({ text, ...options })],
        width: { size: 100 / 4, type: WidthType.PERCENTAGE },
    });
}

// Helper to create a header row
function headerRow(cols) {
    return new TableRow({
        children: cols.map(c => new TableCell({
            children: [new Paragraph({ text: c, bold: true, heading: HeadingLevel.HEADING_3 })],
            width: { size: 100 / cols.length, type: WidthType.PERCENTAGE },
            shading: { fill: '2c3e50' },
        })),
        tableHeader: true,
    });
}

// Helper to create a data row
function dataRow(cols) {
    return new TableRow({
        children: cols.map(c => cell(c)),
    });
}

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                text: 'Chapter 12 — Functions Cheat Sheet',
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
                text: 'Quick reference for every exercise file in chapter_12_Functions/. One file = one row. One concept = one line.',
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({ text: '' }),

            // Section 1: Function Types
            new Paragraph({ text: '1. Function Types (96 → 100)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output']),
                    dataRow(['96_Functions.js', 'Define & call a function', 'function Hello() { console.log("Hi"); } + Hello();', 'Hi']),
                    dataRow(['97_TYPE1_basic_fn.js', 'No args, no return', 'function greet() { console.log("Hi there!"); }', 'Hi there!']),
                    dataRow(['97_TYPE1_basic_fn.js', 'Save result of no-return fn', 'let result = greet();', 'undefined']),
                    dataRow(['98_T2_with_Arg_no_return.js.js', 'Function with argument', 'function greetByName(name) { console.log("Hello, " + name); }', 'Hello, Meera']),
                    dataRow(['98_T2_with_Arg_no_return.js.js', 'Call with different values', 'greetByName("Meera"); greetByName("Venkatesh");', '(two prints)']),
                    dataRow(['99_T3_without _Param_ret_type.js', 'No args, with return', 'function getGreetingMessage() { return "Welcome to JS!"; }', 'Welcome to JS!']),
                    dataRow(['99_T3_without _Param_ret_type.js', 'Save returned value', 'let message = getGreetingMessage();', '"Welcome to JS!"']),
                    dataRow(['100_T4_With_Param_with_Return.js', 'Args + return', 'function sum(a, b) { return a + b; }', 'sum(4, 5) → 9']),
                    dataRow(['100_T4_With_Param_with_Return.js', 'Use return directly in log', 'console.log("100 + 200 =", sum(100, 200));', '100 + 200 = 300']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Section 2: Template Literals & Expressions
            new Paragraph({ text: '2. Template Literals & Expressions (101 → 102)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output']),
                    dataRow(['101_Template_literal.js', 'Template literal `${}`', 'function greet(name) { return `Hello, ${name}!`; }', 'Hello, Alice!']),
                    dataRow(['101_Template_literal.js', 'Multiple variables', 'introduce("Meera", 25, "Chennai") → `My name is ${name}...`', 'My name is Meera, I am 25...']),
                    dataRow(['101_Template_literal.js', 'Math inside `${}`', 'return `The sum of ${a} and ${b} is ${a + b}`;', 'The sum of 5 and 3 is 8']),
                    dataRow(['102_Fn_Expression.js', 'Function expression', 'const sayHello = function(name) { return "Hello, " + name; };', 'sayHello("Meera") → Hello, Meera']),
                    dataRow(['102_Fn_Expression.js', 'Expression with return', 'const add = function(a, b) { return a + b; };', 'add(10, 5) → 15']),
                    dataRow(['102_Fn_Expression.js', 'Expression without params', 'const showMessage = function() { console.log("Hello!"); };', 'Hello!']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Section 3: Arrow Functions
            new Paragraph({ text: '3. Arrow Functions (103 → 104)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output']),
                    dataRow(['103_Arrow_Fn.js', 'Normal vs Arrow', 'const addArrow = (a, b) => a + b;', 'addArrow(2, 3) → 5']),
                    dataRow(['103_Arrow_Fn.js', 'One parameter (skip ())', 'const double = n => n * 2;', 'double(5) → 10']),
                    dataRow(['103_Arrow_Fn.js', 'No parameters', 'const sayHi = () => "Hi there!";', 'sayHi() → Hi there!']),
                    dataRow(['103_Arrow_Fn.js', 'Multi-line arrow', 'const greet = (name) => { const msg = "Hello, " + name; return msg; };', 'Hello, Meera!']),
                    dataRow(['103_Arrow_Fn.js', 'Arrow with console.log', 'const printName = name => console.log("Name:", name);', 'Name: Dutta']),
                    dataRow(['104_Arroe_real.js', 'Arrow in real check', 'const validate = status => { if(status>=200 && status<=300) console.log("OK"); };', 'Request is fine']),
                    dataRow(['104_Fn_Comparison_Table.js', 'Normal function', 'function addNormal(a, b) { return a + b; }', '5']),
                    dataRow(['104_Fn_Comparison_Table.js', 'Function expression', 'const addExpression = function(a, b) { return a + b; };', '5']),
                    dataRow(['104_Fn_Comparison_Table.js', 'Arrow function', 'const addArrow = (a, b) => a + b;', '5']),
                    dataRow(['104_Fn_Comparison_Table.js', 'One param arrow', 'const greetArrow = name => "Hi " + name;', 'Hi Meera']),
                    dataRow(['104_Fn_Comparison_Table.js', 'No param arrow', 'const hiArrow = () => "Hello";', 'Hello']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Section 4: IIFE & Default Parameters
            new Paragraph({ text: '4. IIFE & Default Parameters (105 → 106)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output']),
                    dataRow(['105_IIFE.js', 'IIFE (normal)', '(function() { console.log("hi"); })();', 'hi']),
                    dataRow(['105_IIFE.js', 'IIFE (arrow)', '(() => { console.log("Setup complete"); })();', 'Setup complete']),
                    dataRow(['106_Default_param.js', 'Default parameter', 'function retry(name, maxRetries = 3, delay = 1000) { ... }', 'Retrying: Login test upto 3 times']),
                    dataRow(['106_Default_param.js', 'Override default', 'retry("Registration Test", 5, 2000);', 'Retrying: Registration Test upto 5 times']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Section 5: Rest, Spread & IQ
            new Paragraph({ text: '5. Rest, Spread & IQ (107 → 110)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output']),
                    dataRow(['107_IQ.js', 'Multiple params + return', 'function runTest(name, status, duration) { return `${name}: ${status} (${duration}ms)`; }', 'Login: pass (320ms)']),
                    dataRow(['108_Rest_Param_fn.js', 'Rest parameter (...)', 'function logResult(suiteName, ...results) { console.log(results); }', 'results → [1, 2, 3]']),
                    dataRow(['109_IQ.js', 'Multiple return conditions', 'function getStatus(code) { if (code>=200 && code<300) return "success"; ... }', 'getStatus(404) → client error']),
                    dataRow(['109_IQ.js', 'No return = undefined', 'function logTest(name) { console.log(`Running: ${name}`); } → let result = logTest("Login");', 'undefined']),
                    dataRow(['109_IQ.js', 'Hoisting issue (expression)', 'sayHi("Bob"); const sayHi = function(name) { return `Hi, ${name}!`; };', 'ReferenceError']),
                    dataRow(['110_Spread_IQ.js', 'Spread in function call', 'let num = [1, 2, 3]; add(...num);', 'add(1, 2, 3) → 6']),
                    dataRow(['110_Spread_IQ.js', 'Spread + Rest together', 'function hasError(...codes) { return codes.some(c => c >= 400); } + hasError(...responseCodes);', 'true']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Section 6: Scope & Nested Functions
            new Paragraph({ text: '6. Scope & Nested Functions (111 → 112)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output / Result']),
                    dataRow(['111_Scope_fn.js', 'Global scope', 'let env = "staging"; (outside any function)', 'Accessible everywhere']),
                    dataRow(['111_Scope_fn.js', 'Local scope', 'function setupConfig() { let timeout = 3000; ... }', 'timeout only inside function']),
                    dataRow(['111_Scope_fn.js', 'Access global inside local', 'console.log(env); inside setupConfig()', 'staging']),
                    dataRow(['111_Scope_fn.js', 'Access local outside', 'console.log(timeout); outside function', 'ReferenceError']),
                    dataRow(['112_IQ.js', 'Nested function (inner scope)', 'function inner() { let y = 20; console.log(x); }', '10 (x from outer)']),
                    dataRow(['112_IQ.js', 'Access inner variable outside', 'console.log(y); inside outer() but outside inner()', 'ReferenceError']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Section 7: Closures
            new Paragraph({ text: '7. Closures (113 → 115)', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['File', 'Concept', 'One-Line Example', 'Output']),
                    dataRow(['113_Closure.js', 'Inner function remembers outer var', 'function outer() { let msg = "hello"; return function inner() { console.log(msg); }; }', 'hello']),
                    dataRow(['113_Closure.js', 'Return inner function', 'let fn = outer(); fn();', 'hello']),
                    dataRow(['114_Closure.js', 'Closure as object (counter)', 'function makeCounter(start = 0) { let count = start; return { increment() { count++; }, get() { return count; } }; }', 'counter.get() → 3']),
                    dataRow(['114_Closure.js', 'Increment & decrement', 'counter.increment(); counter.decrement();', 'count changes but stays private']),
                    dataRow(['115_API_Real_Closure.js', 'Real-world retry tracker', 'function makeRetryTracker(max) { let attempts = 0; return function(testName) { attempts++; ... }; }', 'Attempt 1/3 for Login']),
                    dataRow(['115_API_Real_Closure.js', 'Closure keeps state', 'let retry = makeRetryTracker(3); retry("Login"); retry("Login");', 'Attempt 1..., Attempt 2..., Attempt 3...']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Legend
            new Paragraph({ text: 'Legend', heading: HeadingLevel.HEADING_2 }),
            new Table({
                rows: [
                    headerRow(['Symbol', 'Meaning']),
                    dataRow(['function', 'Normal function declaration']),
                    dataRow(['const fn = function(){}', 'Function expression']),
                    dataRow(['const fn = () => {}', 'Arrow function']),
                    dataRow(['(...args)', 'Rest parameter (collects remaining args into array)']),
                    dataRow(['fn(...array)', 'Spread operator (expands array into arguments)']),
                    dataRow(['return', 'Sends a value back to the caller']),
                    dataRow(['undefined', 'What you get when a function has no return']),
                ],
                width: { size: 100, type: WidthType.PERCENTAGE },
            }),
            new Paragraph({ text: '' }),

            // Quick Summary
            new Paragraph({ text: 'Quick Summary', heading: HeadingLevel.HEADING_2 }),
            new Paragraph({ text: 'Type 1: function greet() { }               → No args, no return' }),
            new Paragraph({ text: 'Type 2: function greet(name) { }           → Args, no return' }),
            new Paragraph({ text: 'Type 3: function get() { return "hi"; }    → No args, return' }),
            new Paragraph({ text: 'Type 4: function add(a, b) { return a+b; } → Args + return' }),
            new Paragraph({ text: '' }),
            new Paragraph({ text: 'Expression: const add = function(a,b) { return a+b; };' }),
            new Paragraph({ text: 'Arrow:      const add = (a, b) => a + b;' }),
            new Paragraph({ text: 'IIFE:       (() => { console.log("hi"); })();' }),
            new Paragraph({ text: 'Default:    function fn(name = "default") { }' }),
            new Paragraph({ text: 'Rest:       function fn(...items) { }' }),
            new Paragraph({ text: 'Spread:     fn(...array);' }),
            new Paragraph({ text: 'Closure:    function outer() { let x = 1; return () => x; }' }),
            new Paragraph({ text: '' }),
            new Paragraph({ text: 'Happy Coding! 🚀', alignment: AlignmentType.CENTER }),
        ],
    }],
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync('chapter_12_Functions/Chapter_12_Functions_Cheat_Sheet.docx', buffer);
    console.log('✅ Word document created: chapter_12_Functions/Chapter_12_Functions_Cheat_Sheet.docx');
});
