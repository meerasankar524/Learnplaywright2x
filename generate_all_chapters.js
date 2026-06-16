const docx = require('docx');
const fs = require('fs');
const path = require('path');

const { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType, HeadingLevel, AlignmentType, BorderStyle, ShadingType, TextRun, ExternalHyperlink } = docx;

// ========== CHAPTER DATA ==========
const chapters = {
  '01_Basics': {
    title: 'Chapter 01 — Basics',
    subtitle: 'Introduction to JavaScript basics, commands, and concepts',
    rows: [
      ['01_Basics.js', 'console.log("Hello World")', 'Hello World', 'Print words to the screen'],
      ['02_JS.js', 'function sayHello() { console.log("Hi"); } sayHello()', 'Hi', 'Create and run a function'],
      ['03_JS_Commands.js', 'console.log("Node version:", process.version)', 'Node version: v18.17.0', 'Check your Node.js version'],
      ['04_Hotcode.js', 'function add(a,b){return a+b} console.log(add(2,3))', '5', 'Add two numbers with a function'],
    ]
  },
  '02_Javascript_concepts': {
    title: 'Chapter 02 — JavaScript Concepts',
    subtitle: 'Core JavaScript concepts and fundamentals',
    rows: [
      ['05_JS_Basics.js', 'var myNumber = 10; console.log(myNumber)', '10', 'Special words JavaScript keeps for itself'],
    ]
  },
  '03_Identifiers_literals': {
    title: 'Chapter 03 — Identifiers & Literals',
    subtitle: 'JavaScript identifier rules, naming conventions, and VS Code shortcuts',
    rows: [
      ['06_Identifire_rules.js', 'let myName = "Meera"; console.log(myName)', 'Meera', 'Rules for naming your variables'],
      ['07_Identifier_part2.js', 'let firstName = "Meera"; console.log(firstName)', 'Meera', 'Writing names with camelCase and snake_case'],
      ['08_Identifier_part2.js', 'let totalPrice = 100; console.log(totalPrice)', '100', 'Different styles for naming things in code'],
      ['javascript-identifier-rules.js', 'let name1 = "works"; console.log(name1)', 'works', 'Rules for naming variables (clean examples)'],
    ]
  },
  '04_JS_concepts': {
    title: 'Chapter 04 — JS Concepts (Variables)',
    subtitle: 'Variable declarations, scope, and hoisting',
    rows: [
      ['09_var_let_cost.js', 'var browser="chrome"; var browser="firefox"; console.log(browser)', 'firefox', 'var, let, and const — how to make boxes'],
      ['10_function.js', 'function greet() { console.log("Hello!"); } greet()', 'Hello!', 'A function is a recipe you write once'],
      ['11_var_explained.js', 'var a = 10; console.log(a)', '10', 'var works everywhere in the file or function'],
      ['12_let_explained.js', 'let a = 5; a = 6; console.log(a)', '6', 'let only works inside the {} block where you put it'],
      ['13_const.js', 'const PI = 3.14; console.log(PI)', '3.14', 'const can never be changed after you fill it'],
      ['14_var_funscoped.js', 'var a = 10; if(true){var a=30} console.log(a)', '30', 'var ignores little {} blocks, only listens to big function blocks'],
      ['15_letscope.js', 'let a = 10; if(true){let a=30} console.log(a)', '10', 'let listens to little {} blocks and keeps its value separate'],
      ['16_Hoisting.js', 'console.log(x); var x = 5', 'undefined', 'JavaScript secretly moves var declarations to the top'],
      ['17_Hoisting_fn.js', 'function f(){console.log(a); var a=1} f()', 'undefined', 'Hoisting happens inside functions too'],
      ['18_let_hoisting.js', 'console.log(b); let b = 100', 'ReferenceError', 'let does NOT move to the top — you get in trouble if you use it too early'],
      ['19_let_hoisting_block.js', 'let x="outside"; if(true){let x="inside"; console.log(x)}', 'inside', 'Same name inside and outside {} block are separate boxes'],
      ['20_let_const.js', 'console.log(y); let y = "meera"', 'ReferenceError', 'Using let or const before creating it causes an error'],
      ['21_jr_QA.js', 'console.log(z); var z = "hello"', 'undefined', 'var boxes are created at the top, so reading them early gives undefined'],
    ]
  },
  '05_Literals': {
    title: 'Chapter 05 — Literals',
    subtitle: 'JavaScript literals: numbers, strings, booleans, null, undefined, symbols',
    rows: [
      ['22_literal.js', 'let age = 25; console.log(typeof age)', 'number', 'A literal is a plain value you write directly'],
      ['23_null_undefined.js', 'let a; console.log(a)', 'undefined', 'undefined means you forgot to put anything in the box'],
      ['24_null.js', 'let b = null; console.log(b)', 'null', 'null means you put nothing on purpose'],
      ['25_Literal_all.js', 'let hex = 0xFF; console.log(hex)', '255', 'Numbers can be written in different ways (hex, octal, etc.)'],
      ['26_Literal_allnumber.js', 'let num = 42; console.log(num)', '42', 'JavaScript has many number shapes: decimal, scientific, binary, BigInt'],
      ['27_string.js', 'let s = "Hello"; console.log(s)', 'Hello', 'You can wrap words in single or double quotes'],
      ['28_Template_literal.js', 'let name = "Meera"; console.log(`Hi ${name}`)', 'Hi Meera', 'Backticks let you drop variables directly inside a sentence'],
      ['29_Backtick_single_double.js', 'let a = "Bob"; console.log(`Hello ${a}`)', 'Hello Bob', 'Backticks are special because they can hold variables and span many lines'],
    ]
  },
  '06_Operators': {
    title: 'Chapter 06 — Operators',
    subtitle: 'Arithmetic, comparison, logical, ternary, nullish coalescing, and more',
    rows: [
      ['30_operator.js', 'let x = 10; console.log(x)', '10', 'The = sign puts a value into a box'],
      ['31_Arithmetic_op.js', 'console.log(5 + 3)', '8', 'Math symbols +, -, *, / do normal math'],
      ['32_modulus.js', 'console.log(10 % 3)', '1', '% gives you the leftover part after dividing'],
      ['33_expo_op.js', 'console.log(2 ** 3)', '8', '** means "to the power of" (multiply a number by itself)'],
      ['34_IQ.js', 'let x = 10; x += 5; console.log(x)', '15', 'Shortcut math symbols +=, -=, *=, /= do math and save in one step'],
      ['35_comparision_op.js', 'console.log(5 > 3)', 'true', 'Comparison symbols check if numbers are bigger, smaller, or equal'],
      ['36_Comparision_strict_loose.js', 'console.log(10 == "10")', 'true', '== checks loosely (might change types), === checks strictly (type + value must match)'],
      ['37_IQ.js', 'console.log(0 == "")', 'true', '== can behave weirdly because it secretly changes types before comparing'],
      ['38_Confusing_comparision.js', 'console.log([] == ![])', 'true', 'Some == comparisons look impossible but work because JavaScript converts things'],
      ['39_logical_op.js', 'console.log(true && false)', 'false', '&& means both must be true, || means at least one must be true, ! flips true to false'],
      ['40_string_con_op.js', 'let s = "Hi"; s += " Dev"; console.log(s)', 'Hi Dev', '+= can glue words together to make a longer sentence'],
      ['41_Ternary_op.js', 'let age = 18; console.log(age >= 18 ? "Yes" : "No")', 'Yes', 'The ? : is a super-short way to pick one of two answers'],
      ['42_Type_op.js', 'console.log(typeof 5)', 'number', 'typeof tells you what kind of thing is inside a box'],
      ['43_Incre_Decre_op.js', 'let x = 5; x++; console.log(x)', '6', '++ adds one to a number, -- subtracts one'],
      ['44_Null_op.js', 'let a = null; console.log(a ?? "default")', 'default', '?? picks the right side only when the left side is null or undefined'],
      ['50_REAL_IF_ELSE.js', 'let age = 18; if(age >= 18) console.log("adult")', 'adult', 'if checks a yes/no question and runs code only when the answer is yes'],
    ]
  },
  '07_if_else': {
    title: 'Chapter 07 — If/Else Statements',
    subtitle: 'Conditional statements: if, else if, else, real-world examples, and IQ problems',
    rows: [
      ['48_if_else.js', 'if(20 >= 18){console.log("You are an adult")}else{console.log("minor")}', 'You are an adult', 'Basic if-else — checking if something is true or false'],
      ['49_if_elseif_else.js', 'if(78>=90)console.log("A");else if(78>=80)console.log("B");else console.log("C")', 'Grade: C', 'if-else if-else — checking many conditions one after another'],
      ['51_API_IF_ELSE.js', 'if(200 === 200) console.log("Success"); else console.log("Error")', 'Success', 'Checking status codes — using if-else to pick a message for a number'],
      ['52_IQ_IF_ELSE.js', 'if("hello") console.log("string")', 'string', 'Truthy and falsy — some values act like true, others like false'],
      ['53_IF_ELSE_REAL.js', 'if(true && true && true) console.log("Allowed to enter")', 'Allowed to enter', 'AND (&&) operator — checking many things at once in one if'],
      ['54_IQ.js', 'if(10 > 5) console.log("x is big")', 'x is big', 'One-line if — writing an if without curly braces'],
      ['55_IFELSE.js', 'if(true) { }', '(nothing)', 'Empty if block — an if statement that does nothing'],
      ['56_IQ_oddeven.js', 'if(10 % 2 === 0) console.log("even num"); else console.log("odd num")', 'even num', 'Even or odd — using % to see if a number splits evenly'],
      ['57_IQ_grade.js', 'if(34 >= 90) console.log("A"); else console.log("F")', 'F', 'else has no condition — only if and else if can check things'],
      ['58_LEAPYR.js', 'if(2024 % 4 === 0) console.log("2024 is a leap year")', '2024 is a leap year', 'Leap year — checking if a year has an extra day'],
    ]
  },
  '08_Switch': {
    title: 'Chapter 08 — Switch Statement',
    subtitle: 'Switch cases, grouped cases, default handling, and IQ problems',
    rows: [
      ['59_switch.js', 'switch(6){case 6: console.log("Sat"); break}', 'Sat', 'Switch statement — picking a message based on a number'],
      ['60_Nobreak.js', 'switch(7){case 7: console.log("Sun"); default: console.log("Only 7 days")}', 'Sun (then Only 7 days)', 'Missing break — when you forget it, the switch keeps running the next cases'],
      ['61_default.js', 'switch(10){default: console.log("Only 7 days")}', 'Only 7 days', 'default case — a backup plan when no case matches'],
      ['62_REALEX.js', 'switch(404){case 404: console.log("404 not found"); break}', '404 not found', 'Switch with status codes — picking a message for a number like 404'],
      ['63_switch_group.js', 'switch("chrome"){case "chrome": case "edge": console.log("Chromium product"); break}', 'Chromium product', 'Grouping cases — many choices can share the same answer'],
      ['64_IQ.js', 'switch("banana"){case "banana": console.log("Banana"); case "cherry": console.log("Cherry")}', 'Banana selected (then Cherry selected)', 'Fall-through — without break, the switch keeps going down through all cases'],
      ['65_IQ2.js', 'switch(true){case (85 >= 85): console.log("Excellent"); break}', 'Excellent — Above expectations', 'switch(true) — using conditions inside a switch'],
      ['66_1Q3.js', 'switch(10){case 10: console.log("1"); break; case 10: console.log("2"); break}', '1', 'Duplicate cases — only the first one runs'],
      ['67_IQ4.js', 'switch(0){case false: console.log("false matched"); break; case 0: console.log("0 matched"); break}', '0 matched', 'Strict matching — switch checks both the value and the type'],
    ]
  },
  '09_UserInput': {
    title: 'Chapter 09 — User Input',
    subtitle: 'Handling user input with readline and prompt-sync in Node.js',
    rows: [
      ['68_Userinput.js', 'let num = Number(prompt("Enter a number:")); if(num % 2 === 0) console.log("Even")', '4 is Even (if user types 4)', 'prompt() — asking the user to type something in a browser'],
      ['69_node_readline.js', 'rl.question("Enter a number: ", (input) => console.log(input))', '(shows whatever number you type)', 'readline in Node.js — asking for input when running outside a browser'],
      ['70_prompt_sync.js', 'let num = Number(prompt("Enter a number: ")); console.log(num)', '(shows the number you typed)', 'prompt-sync — a tool to ask for input easily in Node.js'],
    ]
  },
  '10_Loops': {
    title: 'Chapter 10 — Loops',
    subtitle: 'for, for...of, for...in, forEach, while, do...while loops and IQ problems',
    rows: [
      ['71_forloop.js', 'for(let i=1; i<=5; i++){console.log(i)}', '1, 2, 3, 4, 5', 'Why we use loops — repeat code without typing it over and over'],
      ['72_forloop.js', 'for(let e=0; e<=5; e++){console.log(e)}', '0, 1, 2, 3, 4, 5', 'A basic for loop that counts from 0 to 5'],
      ['73_forloop2.js', 'for(let i=0; i<10; i++){console.log(i)}', '0, 1, 2, 3, 4, 5, 6, 7, 8, 9', 'A for loop that runs 10 times and prints numbers 0 through 9'],
      ['74_IQ.js', 'for(let i=0; i<1; i++){console.log(i)}', '0', 'How for loop conditions work — if the condition is wrong, the loop might not run'],
      ['75_FOR_of_in_each.js', 'for(let fruit of ["apple","banana"]){console.log(fruit)}', 'apple, banana', 'for...of, for...in, forEach — looping through arrays'],
      ['76_While.js', 'let attempt=0; while(attempt<3){console.log(attempt); attempt++}', '0, 1, 2', 'A while loop keeps running as long as a condition is true'],
      ['77_DO-While.js', 'let a=10; do{console.log(a); a++} while(a<10)', '10', 'A do-while loop always runs at least once, even if the condition is false'],
      ['78_Do_While.js', 'let retry=0; do{console.log("Retrying", retry); retry++} while(retry<3)', 'Retrying 0, Retrying 1, Retrying 2', 'Using a do-while loop to retry something a few times'],
      ['79_IQ.js', 'let i=5; while(i>0){console.log(i); i--}', '5, 4, 3, 2, 1', 'A while loop can count backwards by subtracting instead of adding'],
      ['80_IQ.js', 'let i=0; do{console.log(i); i--} while(i>0)', '0', 'A do-while loop runs the code first, then checks the rule — so it prints at least one time'],
      ['81_IQ.js', 'for(let i=0; i<3; i++){if(i===1) continue; console.log(i)}', '0, 2', 'The continue keyword skips the rest of the loop and goes to the next round'],
      ['82_IQ.js', 'let n=1; do{console.log(n); n++} while(n<3)', '1, 2', 'Warning — if you forget to update the variable inside a do-while loop, it runs forever'],
    ]
  },
  '11_Arrays': {
    title: 'Chapter 11 — Arrays',
    subtitle: 'Array creation, access, manipulation, searching, iteration, transformation, slicing, concatenation, and checking',
    rows: [
      ['83_Array.js', 'let fruits = ["apple","banana","cherry"]; console.log(fruits[0])', 'apple', 'An array is a list that holds many items in one place'],
      ['84-Array.js', 'let chars = Array.from("Hello"); console.log(chars)', "[ 'H', 'e', 'l', 'l', 'o' ]", 'Different ways to make an array: brackets, new Array, Array.of, Array.from'],
      ['85_Access_Array.js', 'let statuses = ["pass","fail","skip"]; statuses[1] = "blocked"; console.log(statuses)', "[ 'pass', 'blocked', 'skip' ]", 'How to read items from an array and change them using their position number'],
      ['86_Array_add_remove.js', 'let arr = [1,2,3]; arr.push(4); console.log(arr)', '[ 1, 2, 3, 4 ]', 'Adding and removing items from the start or end with push, pop, unshift, shift'],
      ['87_Add_remove_part2.js', 'let arr = [1,2,3,4]; arr.splice(1,2); console.log(arr)', '[ 1, 4 ]', 'Using splice to add, remove, or replace items in the middle of an array'],
      ['88_REAL_EX_Arr.js', 'let browser = ["chrome","firefox"]; browser.pop(); console.log(browser)', '[ "chrome" ]', 'A real example of working with a list of browsers'],
      ['89_Searching.js', 'let nums = [10,25,30]; let r = nums.find(x => x > 20); console.log(r)', '25', 'Finding items inside an array — checking where they are or if they exist'],
      ['90_Iterate.js', 'let tests = ["login","checkout"]; for(let test of tests){console.log(test)}', 'login, checkout', 'Different ways to go through every item in an array one by one'],
      ['91_Transform.js', 'let scores = [45,82,91]; let passing = scores.filter(s => s > 70); console.log(passing)', '[ 82, 91 ]', 'map changes every item, filter keeps only some items, reduce adds them up, flat removes nested layers'],
      ['92_Array.js', 'let nums = [10,1,21,2]; nums.sort((a,b) => a - b); console.log(nums)', '[ 1, 2, 10, 21 ]', 'Sorting arrays — putting items in order from smallest to largest or largest to smallest'],
      ['93_Slicing_Array.js', 'let arr = [1,2,3,4,5]; console.log(arr.slice(1,3))', '[ 2, 3 ]', 'slice copies a piece of an array without changing the original, while splice cuts it out'],
      ['94_Concat_Array.js', 'let a = [1,2]; let b = [3,4]; console.log(a.concat(b))', '[ 1, 2, 3, 4 ]', 'Joining two or more arrays together into one big array'],
      ['95_Array_checking.js', 'let scores = [80,90,85]; console.log(scores.every(s => s >= 70))', 'true', 'Checking if something is an array, and testing if all or some items pass a rule'],
    ]
  },
  '13_Strings': {
    title: 'Chapter 13 — Strings',
    subtitle: 'String methods, properties, searching, checking, transforming, extracting, and conversion',
    rows: [
      ['118_Strings.js', 'let msg = `Hello, ${"Alice"}!`; console.log(msg)', 'Hello, Alice!', 'What a string is and how to write one using quotes, backticks, and template literals'],
      ['119_Strings_properities.js', 'let s = "Hello"; console.log(s.length)', '5', 'How to check a string\'s length and grab letters by their position (index)'],
      ['120_Searching_Checking.js', 'let u = "https://vwo.com"; console.log(u.includes("vwo"))', 'true', 'How to search inside a string and check if it starts or ends with certain words'],
      ['121_substring.js', 'let s = "Login_Test"; console.log(s.slice(0,5))', 'Login', 'How to cut out a piece of a string using slice and substring'],
      ['122_Transform_str.js', 'let s = "  hi  "; console.log(s.trim().toUpperCase())', 'HI', 'How to change a string: uppercase, lowercase, trim spaces, replace words, split, and join'],
      ['123_Str_conversion.js', 'console.log(Number("42"))', '42', 'How to turn numbers into strings and strings back into numbers'],
      ['JS_Str_cheat_sheet_fn.js', 'console.log("hello".toUpperCase())', 'HELLO', 'A quick reference table showing all the built-in tools (methods) you can use on strings'],
    ]
  },
  '14_Objects': {
    title: 'Chapter 14 — Objects',
    subtitle: 'Object creation, key-value pairs, and accessing properties',
    rows: [
      ['124_obj.js', 'let person = { name: "Meera", age: 26 }; console.log(person.name)', 'Meera', 'How to create an object that stores labeled information (key-value pairs)'],
      ['125_obj1.js', 'let car = { color: "red" }; console.log(car.color)', 'red', 'An object is a container that holds data as keys and values'],
    ]
  }
};

// ========== HELPER FUNCTIONS ==========

function createCell(text, options = {}) {
  const children = [];
  if (options.bold) {
    children.push(new TextRun({ text, bold: true, size: 22 }));
  } else {
    children.push(new TextRun({ text, size: 20 }));
  }
  
  return new TableCell({
    children: [new Paragraph({ children, spacing: { before: 60, after: 60 } })],
    width: { size: 100 / 4, type: WidthType.PERCENTAGE },
    shading: options.shading ? { fill: options.shading } : undefined,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
    verticalAlign: 'center',
  });
}

function createHeaderRow() {
  return new TableRow({
    children: [
      createCell('File', { bold: true, shading: '2c3e50' }),
      createCell('One-Line Example', { bold: true, shading: '2c3e50' }),
      createCell('Output', { bold: true, shading: '2c3e50' }),
      createCell('What It Does', { bold: true, shading: '2c3e50' }),
    ],
    tableHeader: true,
  });
}

function createDataRow(cols) {
  return new TableRow({
    children: cols.map(c => createCell(c)),
    height: { value: 400, rule: 'atLeast' },
  });
}

function generateChapterDoc(chapterKey) {
  const data = chapters[chapterKey];
  const safeKey = chapterKey.replace(/[^a-zA-Z0-9]/g, '_');
  
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title
        new Paragraph({
          children: [new TextRun({ text: data.title, bold: true, size: 32, color: '2c3e50' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),
        // Subtitle
        new Paragraph({
          children: [new TextRun({ text: data.subtitle, size: 22, color: '7f8c8d' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 240 },
        }),
        // Table
        new Table({
          rows: [
            createHeaderRow(),
            ...data.rows.map(row => createDataRow(row)),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),
        // Spacing
        new Paragraph({ text: '', spacing: { after: 200 } }),
        // Legend
        new Paragraph({
          children: [new TextRun({ text: 'How to Read This Table', bold: true, size: 24, color: '2c3e50' })],
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [new TextRun({ text: '• File: The name of the JavaScript file you can find in the chapter folder.', size: 20 })],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [new TextRun({ text: '• One-Line Example: The simplest code you can copy and run to see how it works.', size: 20 })],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [new TextRun({ text: '• Output: What you will see in the console when you run the example.', size: 20 })],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [new TextRun({ text: '• What It Does: A simple explanation of the concept in plain English.', size: 20 })],
          spacing: { after: 60 },
        }),
        // Footer
        new Paragraph({ text: '', spacing: { after: 200 } }),
        new Paragraph({
          children: [new TextRun({ text: 'Happy Learning! 🚀', size: 22, color: '27ae60' })],
          alignment: AlignmentType.CENTER,
        }),
      ],
    }],
  });

  return { doc, filename: `${safeKey}_Cheat_Sheet.docx` };
}

// ========== GENERATE ALL DOCS ==========
async function generateAllDocs() {
  console.log('🚀 Starting Word document generation for all chapters...\n');
  
  for (const chapterKey of Object.keys(chapters)) {
    const { doc, filename } = generateChapterDoc(chapterKey);
    const buffer = await Packer.toBuffer(doc);
    
    // Determine output directory based on chapter
    let outputDir;
    if (chapterKey === '01_Basics') outputDir = 'chapter_01_Basics';
    else if (chapterKey === '02_Javascript_concepts') outputDir = 'chapter_02_Javascript_concepts';
    else if (chapterKey === '03_Identifiers_literals') outputDir = 'chapter_03_Identifiers_literals';
    else if (chapterKey === '04_JS_concepts') outputDir = 'chapter_04_JS_concepts';
    else if (chapterKey === '05_Literals') outputDir = 'chapter_05_Literals.js';
    else if (chapterKey === '06_Operators') outputDir = 'chapter_06_double_tripple_equal.js';
    else if (chapterKey === '07_if_else') outputDir = 'chapter_07_if_else.js';
    else if (chapterKey === '08_Switch') outputDir = 'chapter_08_Switch_statement.js';
    else if (chapterKey === '09_UserInput') outputDir = 'chapter_09_UserInput';
    else if (chapterKey === '10_Loops') outputDir = 'chapter_10_loops';
    else if (chapterKey === '11_Arrays') outputDir = 'chapter_11_Arrays.js';
    else if (chapterKey === '13_Strings') outputDir = 'chapter_13_Strings';
    else if (chapterKey === '14_Objects') outputDir = 'chapter_14_Objects';
    
    const outputPath = path.join(outputDir, filename);
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Created: ${outputPath}`);
  }
  
  console.log('\n🎉 All Word documents generated successfully!');
}

generateAllDocs().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
