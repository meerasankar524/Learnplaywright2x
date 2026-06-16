// Default Parameters .. supports Multiple Parameters

function retry(testname, maxRetries= 3, delay= 1000){
    console.log(`Retrying: ${testname} upto ${maxRetries} times , ${delay}ms apart`);
}

retry("Login test");
retry("Registration Test", 5 , 2000);