
let a = 10;
console.log(a); //global scope

function printhello() {
    console.log("Hello everyone!");
    let a = 20; //Local letiable
    console.log(a);

    if (true) {
        let a = 30; //Local scope // Block SCOPED

        console.log(a);
    }

    console.log("F -> ", a); // It will print 20 because let is block scoped, 
    // it does not have function scope
}

console.log("G -> ", a); // It will print 10 because let is block scoped, it does not have function scope
printhello();
// let  can be changed 100 of times