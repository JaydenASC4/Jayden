var myChoice = 0;

var database = firebase.database().ref();

var choices = [0,1,2];

var otherChoice = choices[Math.floor(Math.random()*3)];

var score = 0;

var tie = "It's a tie";
var loss = "You lose";
var win = "You win";
var winTimes = 0;

console.log("user choice: "+myChoice);
console.log("computer choice "+otherChoice);

function reset(){
    otherChoice = choices[Math.floor(Math.random()*3)];

}


function rock(){
    myChoice =0;
    if(otherChoice == 0){
        console.log(tie);
        $(".noSauce").append("<p>" + tie + "</p>");
        $(".noSauce").append("<p> Your score is " + score + "</p>");
    }else if(otherChoice == 1){
        console.log(loss);
        $(".noSauce").append("<p>" + loss + "</p>");
        $(".noSauce").append("<p> Your score is " + score + "</p>");
    }else if(otherChoice == 2){
        console.log("You win");
        $(".noSauce").append("<p>" + win) + "</p>";
        $(".noSauce").append(score+=10);
    }
    reset();
} 
function paper(){
    myChoice = 1;
    if(otherChoice == 0){
        console.log("You win");
        $(".noSauce").append("<p>" + win + "</p>");
        $(".noSauce").append(score+=10);
    }else if(otherChoice == 1){
        console.log("It's a tie");
        $(".noSauce").append("<p>" + tie + "</p>");
        $(".noSauce").append("<p> Your score is " + score + "</p>");
    }else if(otherChoice == 2){
        console.log("You lose");
        $(".noSauce").append("<p>" + loss + "</p>");
        $(".noSauce").append("<p>" + score + "</p>");
    }
    reset();
} 
function scissors(){
    myChoice = 2;
    if(otherChoice == 0){
        console.log("You lose");
        $(".noSauce").append("<p>" + loss + "</p>");
        $(".noSauce").append("<p> Your score is " + score +  "</p>");
    }else if(otherChoice == 1){
        console.log("You win");
        $(".noSauce").append("<p>" + win + "</p>");
        $(".noSauce").append(score+=10);
    }else if(otherChoice == 2){
        console.log("It's a tie");
        $(".noSauce").append("<p>" + tie + "</p>");
        $(".noSauce").append("<p> Your score is " + score + "</p>");
    }
    reset();
}

var name = $("#name").val();

function logScore(){
    database.push(name + " : " + score)
    console.log(name + score)
}

function reSet(){
    $(".noSauce").empty();
}
