//if our statuscode >= 300 && ourstatuscode< 300

function validateStatusCode(status){
if(status>= 200 && status <= 300){
    console.log("Request is fine");
}

}
// function AS expression
const validateStatusCode_Exp = function(status){
if(status>= 200 && status <= 300){
    console.log("Request is fine");
}
}
// Arrow function
const validateStatusCode_Arrow  = status =>{
if(status>= 200 && status <= 300){
    console.log("Request is fine");
}

}
