var apiURL = "https://randomuser.me/api/?nat=US";
var cURL = "https://restcountries.eu/rest/v2/all";
var book1 = "http://www.sparknotes.com/lit/the-hunger-games/";
var book2 = "http://www.sparknotes.com/lit/flies/";
var book3 = "http://www.sparknotes.com/lit/tomsawyer/";
var book4 = "http://www.sparknotes.com/lit/ambassadors/";
var book5 = "http://www.sparknotes.com/lit/babbitt/";
var book6 = "http://www.sparknotes.com/lit/hardtimes/";
var book7 = "http://www.sparknotes.com/lit/unvanquished/";
var book8 = "http://www.sparknotes.com/drama/viewbridge/";
var book9 = "http://www.sparknotes.com/lit/odyssey/";
var book10 = "http://www.sparknotes.com/drama/oedipus/";
var books = [book1,book2,book3,book4,book5,book6,book7,book8,book9,book10]

function rand(upperbd){
    return Math.floor(Math.random()*upperbd)
}

$.ajax({
    url:apiURL,
    success:function(data){
        myFunction(data);
    }
});


function link(){
    books[rand(11)] 
}

function myFunction(data){
var nat = data.results[0].nat;
var sex = data.results[0].gender;
var userPicture = data.results[0].picture.large;
var firstname = data.results[0].name.first;
var lastname = data.results[0].name.last;
var title = data.results[0].name.title;
$("body").append("<h1>" + title + "."  + firstname + " " + lastname +  "</h1>");
$("body").append("<img class='imgFormat' src= " + userPicture + ">");
if ( sex == "male"){
    $("body").append('<h2>' + "He's a male!" +  '</h2>');
}
else if ( sex == "female"){
    $("body").append('<h2>' + "She's a female!" + '</h2>');
}
var b = books[rand(9)];

if (b == book1){
$("body").append("<a class='linkus' href=\'" + b + "/'>The Hunger Games</a>");
}

else if (b == book2){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: The lord of the flies</a>");   
}

else if (b == book3){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: The Adventures OF Tom Sawyer</a>");
}

else if (b == book4){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: The Ambassadors</a>");
}

else if (b == book5){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: Babbitt</a>");
}

else if (b == book6){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: Hard Times</a>");
}

else if (b == book7){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: The Unvanquished</a>");
}

else if (b == book8){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: The Odyssey</a>");
}

else if (b == book9){
$("body").append("<a class='linkus' href=\'" + b + "/'>Your book is: The View from the Bridge</a>");
}

else if (b == book10){
$("body").append("<a class=' linkus'href=\'" + b + "/'>Your book is: Oedipus</a>");
}
 


cURL = "https://restcountries.eu/rest/v2/alpha/" + nat;

$.ajax({
    url:cURL,
    success:function(data){
        myFunction2(data);
        }
});



}



function myFunction2(data){
    var countryCode = data.alpha2Code;
    var name = data.name;
    $("body").append("<h1> From: " + name + "</h1>")


}


function reload(){
    location.reload()
}

function save(){
    database.push()
}