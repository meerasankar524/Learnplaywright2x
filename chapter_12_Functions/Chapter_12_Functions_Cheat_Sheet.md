# Chapter 12 — Functions Cheat Sheet

> Quick reference for every exercise file in `chapter_12_Functions/`.  
> One file = one row. One concept = one line. Copy-paste ready examples.

---

## 1. Function Types (96 → 100)

| File | Concept | One-Line Example | Output |
|------|---------|------------------|--------|
| `96_Functions.js` | Define & call a function | `function Hello() { console.log("Hi"); }` + `Hello();` | `Hi` |
| `97_TYPE1_basic_fn.js` | No args, no return | `function greet() { console.log("Hi there!"); }` | `Hi there!` |
| `97_TYPE1_basic_fn.js` | Save result of no-return fn | `let result = greet();` | `undefined` |
| `98_T2_with_Arg_no_return.js.js` | Function with argument | `function greetByName(name) { console.log("Hello, " + name); }` | `Hello, Meera` |
| `98_T2_with_Arg_no_return.js.js` | Call with different values | `greetByName("Meera"); greetByName("Venkatesh");` | (two prints) |
| `99_T3_without _Param_ret_type.js` | No args, with return | `function getGreetingMessage() { return "Welcome to JavaScript!"; }` | `Welcome to JavaScript!` |
| `99_T3_without _Param_ret_type.js` | Save returned value | `let message = getGreetingMessage();` | `"Welcome to JavaScript!"` |
| `100_T4_With_Param_with_Return.js` | Args + return | `function sum(a, b) { return a + b; }` | `sum(4, 5)` → `9` |
| `100_T4_With_Param_with_Return.js` | Use return directly in log | `console.log("100 + 200 =", sum(100, 200));` | `100 + 200 = 300` |

---

## 2. Template Literals & Expressions (101 → 102)

| File | Concept | One-Line Example | Output |
|------|---------|------------------|--------|
| `101_Template_literal.js` | Template literal `${}` | ``function greet(name) { return `Hello, ${name}!`; }`` | `Hello, Alice!` |
| `101_Template_literal.js` | Multiple variables | ``introduce("Meera", 25, "Chennai")`` → `` `My name is ${name}, I am ${age}...` `` | `My name is Meera, I am 25 years old...` |
| `101_Template_literal.js` | Math inside `${}` | ``return `The sum of ${a} and ${b} is ${a + b}`;`` | `The sum of 5 and 3 is 8` |
| `102_Fn_Expression.js` | Function expression | `const sayHello = function(name) { return "Hello, " + name; };` | `sayHello("Meera")` → `Hello, Meera` |
| `102_Fn_Expression.js` | Expression with return | `const add = function(a, b) { return a + b; };` | `add(10, 5)` → `15` |
| `102_Fn_Expression.js` | Expression without params | `const showMessage = function() { console.log("Hello!"); };` | `Hello!` |

---

## 3. Arrow Functions (103 → 104)

| File | Concept | One-Line Example | Output |
|------|---------|------------------|--------|
| `103_Arrow_Fn.js` | Normal vs Arrow | `const addArrow = (a, b) => a + b;` | `addArrow(2, 3)` → `5` |
| `103_Arrow_Fn.js` | One parameter (skip `()`) | `const double = n => n * 2;` | `double(5)` → `10` |
| `103_Arrow_Fn.js` | No parameters | `const sayHi = () => "Hi there!";` | `sayHi()` → `Hi there!` |
| `103_Arrow_Fn.js` | Multi-line arrow (needs `{}` + `return`) | `const greet = (name) => { const msg = "Hello, " + name; return msg; };` | `Hello, Meera!` |
| `103_Arrow_Fn.js` | Arrow with console.log (no return) | `const printName = name => console.log("Name:", name);` | `Name: Dutta` |
| `104_Arroe_real.js` | Arrow in real check | `const validateStatusCode_Arrow = status => { if(status>=200 && status<=300) console.log("Request is fine"); };` | `Request is fine` |
| `104_Fn_Comparison_Table.js` | Normal function | `function addNormal(a, b) { return a + b; }` | `5` |
| `104_Fn_Comparison_Table.js` | Function expression | `const addExpression = function(a, b) { return a + b; };` | `5` |
| `104_Fn_Comparison_Table.js` | Arrow function | `const addArrow = (a, b) => a + b;` | `5` |
| `104_Fn_Comparison_Table.js` | One param arrow | `const greetArrow = name => "Hi " + name;` | `Hi Meera` |
| `104_Fn_Comparison_Table.js` | No param arrow | `const hiArrow = () => "Hello";` | `Hello` |

---

## 4. IIFE & Default Parameters (105 → 106)

| File | Concept | One-Line Example | Output |
|------|---------|------------------|--------|
| `105_IIFE.js` | IIFE (normal) | `(function() { console.log("hi"); })();` | `hi` |
| `105_IIFE.js` | IIFE (arrow) | `(() => { console.log("Setup complete"); })();` | `Setup complete` |
| `106_Default_param.js` | Default parameter | `function retry(testname, maxRetries = 3, delay = 1000) { ... }` | `Retrying: Login test upto 3 times` |
| `106_Default_param.js` | Override default | `retry("Registration Test", 5, 2000);` | `Retrying: Registration Test upto 5 times` |

---

## 5. Rest, Spread & IQ (107 → 110)

| File | Concept | One-Line Example | Output |
|------|---------|------------------|--------|
| `107_IQ.js` | Function with multiple params + return | `function runTest(name, status, duration) { return \`${name}: ${status} (${duration}ms)\`; }` | `Login: pass (320ms)` |
| `108_Rest_Param_fn.js` | Rest parameter (`...`) | `function logResult(suiteName, ...results) { console.log(results); }` | `results` → `[1, 2, 3]` |
| `109_IQ.js` | Multiple return conditions | `function getStatus(code) { if (code>=200 && code<300) return "success"; ... }` | `getStatus(404)` → `client error` |
| `109_IQ.js` | No return = undefined | `function logTest(name) { console.log(\`Running: ${name}\`); }` → `let result = logTest("Login");` | `undefined` |
| `109_IQ.js` | Function expression hoisting issue | `sayHi("Bob"); const sayHi = function(name) { return \`Hi, ${name}!\`; };` | `ReferenceError` (cannot hoist expression) |
| `110_Spread_IQ.js` | Spread in function call | `let num = [1, 2, 3]; add(...num);` | `add(1, 2, 3)` → `6` |
| `110_Spread_IQ.js` | Spread + Rest together | `function hasError(...codes) { return codes.some(c => c >= 400); }` + `hasError(...responseCodes);` | `true` |

---

## 6. Scope & Nested Functions (111 → 112)

| File | Concept | One-Line Example | Output / Result |
|------|---------|------------------|-----------------|
| `111_Scope_fn.js` | Global scope | `let env = "staging";` (outside any function) | Accessible everywhere |
| `111_Scope_fn.js` | Local scope | `function setupConfig() { let timeout = 3000; ... }` | `timeout` only inside function |
| `111_Scope_fn.js` | Access global inside local | `console.log(env);` inside `setupConfig()` | `staging` ✅ |
| `111_Scope_fn.js` | Access local outside | `console.log(timeout);` outside function | `ReferenceError` ❌ |
| `112_IQ.js` | Nested function (inner scope) | `function inner() { let y = 20; console.log(x); }` | `10` (x from outer) ✅ |
| `112_IQ.js` | Access inner variable outside | `console.log(y);` inside `outer()` but outside `inner()` | `ReferenceError` ❌ |

---

## 7. Closures (113 → 115)

| File | Concept | One-Line Example | Output |
|------|---------|------------------|--------|
| `113_Closure.js` | Inner function remembers outer variable | `function outer() { let msg = "hello"; return function inner() { console.log(msg); }; }` | `hello` |
| `113_Closure.js` | Return inner function | `let fn = outer(); fn();` | `hello` |
| `114_Closure.js` | Closure as object (counter) | `function makeCounter(start = 0) { let count = start; return { increment() { count++; }, get() { return count; } }; }` | `counter.get()` → `3` |
| `114_Closure.js` | Increment & decrement | `counter.increment(); counter.decrement();` | `count` changes but stays private |
| `115_API_Real_Closure.js` | Real-world retry tracker | `function makeRetryTracker(max) { let attempts = 0; return function(testName) { attempts++; ... }; }` | `Attempt 1/3 for Login` |
| `115_API_Real_Closure.js` | Closure keeps state across calls | `let retry = makeRetryTracker(3); retry("Login"); retry("Login");` | `Attempt 1...`, `Attempt 2...`, `Attempt 3...`, then `exceeded` |

---

## Legend

| Symbol | Meaning |
|--------|---------|
| `function` | Normal function declaration |
| `const fn = function(){}` | Function expression |
| `const fn = () => {}` | Arrow function |
| `(...args)` | Rest parameter (collects remaining args into array) |
| `fn(...array)` | Spread operator (expands array into arguments) |
| `return` | Sends a value back to the caller |
| `undefined` | What you get when a function has no `return` |

---

## Quick Summary

```
Type 1: function greet() { }               → No args, no return
Type 2: function greet(name) { }           → Args, no return
Type 3: function get() { return "hi"; }    → No args, return
Type 4: function add(a, b) { return a+b; } → Args + return

Expression: const add = function(a,b) { return a+b; };
Arrow:      const add = (a, b) => a + b;
IIFE:       (() => { console.log("hi"); })();
Default:    function fn(name = "default") { }
Rest:       function fn(...items) { }
Spread:     fn(...array);
Closure:    function outer() { let x = 1; return () => x; }
```

---

**Happy Coding! 🚀**
