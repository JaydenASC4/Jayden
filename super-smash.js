var prompt = require('prompt-sync')();
var mashArray = ["Plains","Safari","Field","Waterfall"];
var firstQuestion = [1,2];
var secondQuestion = ["Mega Man", "Ganandorf"];

function fight(firstQuestion, secondQuestion, mashArray){
      var strike = prompt('How many times shall you strike ');
      firstQuestion.push(strike);
      console.log("You have chosen to strike " + strike + " times");
     
      var char = prompt('Who will you choose to fight ');
      secondQuestion.push(char);
      console.log("You have chosen " + char + " to fight");

      var map = prompt('Where do you wish to fight. ')
      mashArray.push(map);
      console.log("You chose to fight at " + map);
}

function ACIA(){
   fight(firstQuestion,secondQuestion,mashArray) 
    console.log("You fought " + secondQuestion[2] + " in the " + mashArray[4] + " and hit them " + firstQuestion[2] + " times. Too bad, Mewtwo wins!")
}

ACIA()













