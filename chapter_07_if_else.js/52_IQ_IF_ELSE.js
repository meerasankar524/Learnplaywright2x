if ("hello") console.log("string ") //truthy condition 
if ("42") console.log(" number is also truthy ") //truthy condition 
if ({}) console.log(" empty object is also truthy ") //truthy condition 
if ([]) console.log(" empty array is also truthy ") //truthy condition 

if ("") console.log("wont print");
if (null) console.log("wont print");
if (undefined) console.log("wont print");
if (NaN) console.log("wont print");
if (0) console.log("wont print");

let name = undefined
if (name) {
    console.log("Hi");
} else console.log("bye");