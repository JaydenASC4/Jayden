function rand(upperbd){
    return Math.floor(Math.random()*upperbd)
}

var hOt = ["heads","tails"];
hOt = hOt[rand(1)];

if(hOt == "heads"){
    console.log("heads")
}

else if(hOt == "tails"){
    console.log("tails")
}


