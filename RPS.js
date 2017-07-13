var userchoice = "r";

var choices = ["r", "p","s"];
var compchoice = Choices[Math.floor(Math.random()*3)];

console.log("User Choice: "+userchoice);
console.log("Computer choice : "+compchoice);

if (userchoice == compchoice){
    console.log("draw game");
}
else if (userchoice=="r");{
    if (compchoice == "p"){
    console.log("Computer wins");
}
else if (compchoice == "s")
    console.log("Human Wins");

else{
    console.log("error! computer chose: " + compchoice)
}}