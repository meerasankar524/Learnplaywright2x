//Accessing & Modifing
//              0     ,  1    ,   2
let statuses = ["pass", "fail", "skip"];
//              -3    ,  -2   , -1            PYTHON CONCEPT
console.log(statuses[0]);
console.log(statuses[1]);  //indexation

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
// console.log(statuses.at(-4)); UNDEFINED

//MODIFY
statuses[1] = "blocked";
console.log(statuses);


