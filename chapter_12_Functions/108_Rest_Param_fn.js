//REST Param or Spread param

function logResult(suiteName, ...results){ // ...results ->  Array of object LAST ONE AS A SPREAD not a 1st one
console.log(suiteName);
console.log(results);

}

logResult('Login test', 1, 2, 3);
logResult("Registeration Test", 5, 2000);