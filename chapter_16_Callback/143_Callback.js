

 function print(){

    console.log("Normal Function is called");
    
 }

 function placeOrder (ClipboardItem, callback){
    console.log("Hi,your order is placed");
    callback();
 }

 //Anonyms way
 placeOrder("Burger", function(){
    console.log("Hi how are you");
    
 })

 placeOrder("Pizza", print)

 placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also fn without name");
    
 })