const { longHexNumber } = require("docx");

const user={ name1: "Meera", age: 26, city:"NYC"};

// //Basic Destructuring
// const {name1, age} = user;
// console.log(name1);
// console.log(age);


// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//destructuring

const {age} = user;

//Default value
const{ country = "USA"} = user;
console.log(country);

// obj within obj with obj

const data = {
    user:{
        name:"John",
        address:
        {
          city: "NYC"
        }
    }
};

const{ user: {address:{city}}}= data;
console.log(data.user.address.city);

