let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);


let num = [3, 1, 4];
num.sort();
console.log(num);

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
// Natural sorting , Lexographic sorting

nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a);
console.log(nums);
