var a = 10;

// var is function scoped, which means it is accessible 
// throughout the function in which it is declared. 
// If it is declared outside of any function, 
// it becomes a global variable. In this case, 'a' 
// is a global variable and can be accessed anywhere in the code.


console.log(a); // Global scope it will available everywhere

function printhello() {
    console.log("Hello everyone!");
    var a = 20; //Local variable
    console.log(a);

    if (true) {
        var a = 30; //Local scope
        console.log(a);
    }

    printhello();
}

// var  can be changed 100 of times