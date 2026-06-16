function addLog(a, b) {
  console.log(a + b);    // prints, returns nothing
}

function addReturn(a, b) {
  return a + b;          // gives value back
}

addLog(4,5);
let Result = addReturn(2,4);
console.log(Result);