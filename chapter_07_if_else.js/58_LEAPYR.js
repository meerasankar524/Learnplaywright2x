let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    (year + " is not a leap yr");

}

// divisible by 4 AND not divisible by 100  ->leapyr
//  OR divisible by 400  -> leap year
// ELSE not a leap yr