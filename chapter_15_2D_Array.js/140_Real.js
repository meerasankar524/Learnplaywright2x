

let testMatrix = [
["login", "pass", 200],
["checkout", "fail", 404],
["search", "pass", 180]
];
for (let i = 0; i < testMatrix.length; i++){
for (let j = 0; j < testMatrix[i].length; j++) {
    console.log(testMatrix[i][j]);
}
console.log( );

} 

for (let row of testMatrix){
    for(let cell of row){
        process.stdout.write(cell + " ")
    }
     console.log();
}
