var prompt = require('prompt-sync')();
var balrog = ["Balrog", 150, 950];
var dudley = ["Dudley", 100, 1200];
var ed = ["Ed", 300, 500];

function characterSelect(balrog,dudley,ed){
    var charPick = prompt('Who will you choose to fight? ');
    if (charPick == balrog){
            console.log("You have chosen " + charPick) ;      
 }  
 else if (charPick == dudley){
     console.log("You have chosen " + charPick)
 }
 else(charPick == ed);
 console.log("You have chosen " + charPick);
}

// array info goes name, hp , attack


var char = characterSelect(balrog,dudley,ed);
var devilJinn = ["Devil Jinn", 100, 1000,];

function ACIA(char){
characterSelect()
var special = prompt('Do you wish to use your special ');
    
    if(char == balrog && special == no){
balrog[1] - devilJinn[2];
console.log("You hit devil Jinn for 150 hp, he now has " + devilJinn[2] + " hp");
    }

    else if(char == balrog && special == "Yes"){
        balrog[1] + 200 - devilJinn[2];
        console.log("You hit devil Jinn for " + balrog[1] + 200 + " hp now he has " + devilJinn[2] + " Hp");
    }
}

while(devilJinn>0){
    ACIA()
}

