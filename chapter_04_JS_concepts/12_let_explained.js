let a = 5;  // let block scoped

let retryCount = 0;
retryCount = retryCount + 1;
console.log("Retry Count:", retryCount);

// let retryCount = 5;
// Syntax error Cannot redeclare block-scoped variable 'retryCount'
//let can be changed but cannot be redeclared in the same scope.

// {} - block
// if () {}
// function name() {}   

let testStatus = "Passed";
if (testStatus === "Passed") {
    let exectionTime = 1200;
    console.log(" Inside block:", exectionTime);
}

console.log("Outside block:", exectionTime); // ReferenceError: exectionTime is not defined