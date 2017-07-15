
var prompt = require('prompt-sync')();
var money = 1000;
var items = [];

while(money > 99){
console.log("You have $ " + money + " Shirts = 100 Computers = 400")  
var answer = prompt('What do you wish to buy')  
}
    
    if(answer == "shirt"){
        money -= 100;
        items.push("Shirt");
        console.log("You bought a shirt.");
 }
else if (answer == "computer"){
    money -= 400;
    items.push("Shirt");
    console.log("You bought a computer!!");
}
else{
console.log("I don't understand what you wrote please try again :(")
}






