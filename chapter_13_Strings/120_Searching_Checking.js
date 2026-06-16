//Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";


// includes

console.log(url.includes("staging"));
console.log(url.includes("Production"));


//Startswith , Endswith


console.log("Startswith: " + url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log("Endswith: " + url.endsWith("true"));



// IndexOf , LastIndexOf

console.log("IndexOF:" + url.indexOf("a"));
console.log("Last IndexOf:" + url.lastIndexOf("a"));
 
console.log("Nothere:" + url.indexOf("nothere"));
console.log("X: " + url.indexOf("X"));

//Regex - Regular Expression- These are nothing but  patterns 
// that you find within the string Automatically


console.log("Search: " + url.search(/login/))
console.log("vwo: " + url.search(/vwo/));
;





