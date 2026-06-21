let scores = [
    [68, 85, 48],
    [67, 85, 46],
    [24, 98, 53]
];

let rowSums = scores.map(row => row.reduce ((a , b) => a +b ,0) );
console.log(rowSums);

let suiteResults = [
["login-pass", "register-pass", "logout-pass"], //Auth suite
["search-pass", "filter-fail", "sort-pass"], //search suite
["checkout-fail", "payment-fail", "confrim-pass"] // payment suite
]

for (let i = 0; i < suiteResults.length; i++){
    for(let j =0; j < suiteResults[i].length; j++){
        if(suiteResults[i][j].includes("fail")){
            console.log(suiteResults[i][j]);
            
        }
    }
}