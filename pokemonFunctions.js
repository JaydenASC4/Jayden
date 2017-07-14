function rand(upperbd){
    return Math.floor(Math.random()*upperbd);
}

function randLetter(){
var Alphabet = ["A", "B", "C", "D" , "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
    return (Alphabet[rand(26)])
}


function randword(){
var strang = ""
for (J=0; J<rand(5) ; J++){
    strang += randLetter();
}
 return strang
}

console.log(randword())

var array1 = ["Hitmonlee",193,210 ]
var array2 = ["Starmie",139,230]

function pokeattack(array1,array2){
    array2[2] -= array1[1];
    return array2;
}
console.log(pokeattack(array1,array2));









