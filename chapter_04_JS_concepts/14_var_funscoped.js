// var is function scoped

var a = 10;
console.log(a); // Global scope it will available everywhere

function printhello() {
    console.log("Hello everyone!");
    var a = 20; //Local variable
    console.log(a);

    if (true) {
        var a = 30; //Local scope // FUNCTION SCOPED

        console.log(a);
    }

    console.log("F -> ", a); // It will print 30 because var is function scoped, it does not have block scope
}

console.log("G -> ", a);
printhello();
// var  can be changed 100 of times