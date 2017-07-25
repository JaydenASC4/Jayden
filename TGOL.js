var sOI = "You have been working on your scientific persuits lately and begin to feel a little confident you make a big leap and discover a formula of immortality You've won the game of life";
var job = "You've begun to work in the field of intellectual persuits" ;
var mName = ["Jerry", "Richard","Ben"] ;
var age = Math.ceil(Math.random()*40);
var gender = ["Female", "Male"] ;
var event = [death, job, sOI,kids];
var fName = ["Stacy", "Maddie","Sandra"] ;
var death = "Something happens that leads to your unfortunate demise.";
var kids = "You and your fiance do the thing that makes the thing and now your a parent hooray!!";

function rand(upperbd){
    return Math.floor(Math.random()*upperbd);
}




gender = gender[rand(2)];
//genderbender picks the gender of character whilst giving him/her a name based on gender
function genderBender(gender,fName,mName){
if(gender == "Female"){
    fName = fName[rand(2)];
    console.log(fName);
    return fName
}
else if(gender == "Male"){
    mName = mName[rand(2)];
    console.log(mName);
    return mName
}
}


console.log("You are a " + age + " year old " + gender + " named " + genderBender(gender,fName,mName) + ".");


function tgol(event){
event = event[rand(3)];
while(event != death || sOI){
if(event == death){
    console.log(death)
}

else if(event == job){
console.log(job);

}
else if(event == sOI){
console.log(sOI);
}

else if (event == kids){
    console.log(kids);
}
}
return
}

tgol(event)











