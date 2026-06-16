const obj = {a:2, f:5, g:8};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


const user = { name: "John", age: 30 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });