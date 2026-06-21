function cafe(item ,callWhenTableisReady){

    console.log("Finding ....1");
    console.log("Finding ....2");
    console.log("Finding ....3");
    console.log(item);
    
    callWhenTableisReady();
}

    function callWhenTableisReady(){
        console.log("Calling 9866466076");
        
    }

    cafe ("Burger", callWhenTableisReady);

    cafe("Pizza", function(){
        console.log("calling 121234312");
        
    });

    //Playwright will use this function
    cafe ("Momos", () => {
        console.log("calling 6556565656");
        
    });