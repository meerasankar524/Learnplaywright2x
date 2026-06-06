// Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

let statuscode = 59;
if (statuscode >= 200 && statuscode < 300) {
    console.log(statuscode + " Success");
}
else if (statuscode >= 300 && statuscode < 400) {
    console.log(statuscode + " Redirection");
}
else if (statuscode >= 400 && statuscode < 500) {
    console.log(statuscode + " Client error");
}
else if (statuscode >= 500 && statuscode < 600) {
    console.log(statuscode + " Server Error");
}
else {
    console.log(statuscode + " Invalid");
}