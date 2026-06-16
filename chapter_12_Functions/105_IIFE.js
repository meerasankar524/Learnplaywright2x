//IIFE - Immediately Invoked Function Expression

(
    function(){
        console.log("hi");
    }
)();


 (
    function(){
        //...Playwright to run test
    }
 )();

 //Arrow as IIFE

 (
    () => {
        console.log("Setup complete");
    }
 )();890