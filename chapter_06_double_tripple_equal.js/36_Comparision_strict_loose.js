// number == string
console.log(10 == '10'); // true
console.log(10 === '10'); // false

console.log(0 == ""); / / true ? "" converted to 0 - checked by the loose
console.log(0 === ""); // false

console.log(true == 1); // true ? true converted to 1
console.log(false == 0); // true ? false converted to 0
console.log(true == "1"); // true ? true converted to 1 and "1" converted to 1
console.log(true == 2); // false ? true converted to 1 and 1 is not equal to 2