var apiURL = "https://randomuser.me/api";

var book1 =  ;
var book2 =  ;
var book3 =  ;
var book4 =  ;
var book5 =  ;
var book6 =  ;
var book7 =  ;
var book8 =  ; 
var book9 =  ; 
var book10 =  ;







$.ajax({
    url:apiURL,
    success:function(data){
        myFunction(data);
    }
});

function myFunction(data){
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

}
