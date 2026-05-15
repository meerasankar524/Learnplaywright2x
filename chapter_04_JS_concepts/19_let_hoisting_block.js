// let is block scoped

let x = "Global Scope";

if (true) {


    let x = "Block Scope"; // same variable name but different scope, this is allowed with let 
    console.log(x); // Output: Block Scope
}

console.log(x); // Output: Global Scope

//you cannot use a variable untill it is defined, this is called Temporal Dead Zone (TDZ) for let and const variables.
// cannot use x untiil you create it 
