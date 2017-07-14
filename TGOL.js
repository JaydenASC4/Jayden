var SoI = "You have been working on your scientific persuits lately and begin to feel a little confident you make a big leap and discover a formula of immortality You've won the game of life";
var Job = "You've begun to work in the field of intellectual persuits" ;
var Mname = ["Jerry", "Richard","Ben"] ;
var Age = Math.ceil(Math.random()*20);
var Gender = ["Female", "Male"] ;
var Event = [Death, Job, SoI,Kids];
var Fname = ["Stacy", "Maddie","Sandra"] ;
var Death = "You unfortunately succumb to an uncurable disease and you die a tragic death You lost the game of life."
var Kids = "You and your fiance do the thing that makes the thing and now your a parent hooray!!" 

function rand(upperbd){
    return Math.floor(Math.random()*upperbd)
}




Gender =  Gender[rand(2)]

if(Gender = "Female"){
    console.log(Fname[rand(2)]);
}




