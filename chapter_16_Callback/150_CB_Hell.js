//Real QA Scenario: End To End Login for the app.vwo.com

//Openbrowser()
//gotoLoginPage()
//enterCredentials()
//Click Login()


function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function(){
        callback();
    }, 1000);
} 


function gotoLoginPage(callback){
     setTimeout(function(){
    console.log("Step 2: Login page Loaded");
        callback();
    }, 2000);
} 

function enterCredentials(callback){
     setTimeout(function(){
    console.log("Step 3: Credentials Entered");
        callback();
    }, 1000);
} 

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 1000);
}


// THIS IS CALLBACK HELL

openBrowser(function(){
    gotoLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test Complete");
            })
        })
    })
})