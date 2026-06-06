let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 2);
// FROM THE 2ND ONE DEL THE ONE VALUE
//    index , delet count -> how many elemet you need to DELETE from the INDEX value 2 
// {if delete count 1 it will delete the 2nd INDEX( only one value)  if delete count 2 (it will del INDEX 2 and 3)
console.log(arr);

arr.splice(2, 0, 99); // add (on the 2nd element dont del ADD it) 
arr.splice(2, 1, 99); // replace
console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5
