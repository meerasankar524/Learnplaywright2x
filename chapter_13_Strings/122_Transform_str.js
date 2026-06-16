let str = "  Hello, World!  ";
console.log("Uppercase: "+ str.toUpperCase());
console.log("Lowercase:" + str.toLowerCase());

console.log("Trim:" + str.trim()); 

//Remove Leading Trail spaces

console.log("starting:"+ str.trimStart());
console.log("ending:" + str.trimEnd());


let msg = "Test: FAIL. Retry: FAIL.";
console.log("Replace: "+ msg.replace("FAIL", "PASS"));
console.log("Replace All: "+ msg.replaceAll("FAIL" , "PASS"));

//Regex
console.log("regex fn:" + msg.replace(/FAIL/g, "PASS"));

//Concatenation

console.log("Simple + -> " + "Hello" + "World");
console.log(".Concat: " + "Hello".concat(" ","World"));
console.log("Template Literal: " + `${"Hello"} ${"World"}`);

let url = "https://app.vwo.con?app=pramod";
console.log("Chnaging env variable -> "+ url.replace(/app/g, "qa"));
 
let r = "pass,fail,skip".split(",");
console.log(r);
 
let rr = "test_login_pass".split("_").join(" ");

console.log(rr);

let parts = ["14", "06", "2026"];
console.log("Join => " + parts.join("/"));


