var apiURL = "https://randomuser.me/api";
var cURL = "https://restcountries.eu/rest/v2/all";

$.ajax({
    url:apiURL,
    success:function(data){
        myFunction(data);
    }
});

function myFunction(data){
var nat = data.results[0].nat;
var sex = data.results[0].gender;
var userPicture = data.results[0].picture.large;
var firstname = data.results[0].name.first;
var lastname = data.results[0].name.last;
var title = data.results[0].name.title;
$("body").append("<h2>" + title + "."  + firstname + " " + lastname + "</h2>");
$("body").append("<img src= " + userPicture + ">");
if ( sex == "male"){
    $("body").append('<h1>' + "issa male!" + '</h1>');
}
else if ( sex == "female"){
    $("body").append('<h1>' + "issa female!" + '</h1>');
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
