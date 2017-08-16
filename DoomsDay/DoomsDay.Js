var database = firebase.database().ref();
var currentEmail = "";


function onSignIn(googleUser){
console.log("User Signed In!")
var profile = googleUser.getBasicProfile();
currentEmail = profile.getEmail();
console.log(currentEmail);
checkDB();
}

function checkDB(){
    var entry = undefined
    database.orderByChild("EMAIL").equalTo(currentEmail).once("value").then(function(snapshot) {
        entry=snapshot.val();
        if (entry == undefined){
            //creates a new entry
            var value = {
                EMAIL: currentEmail
                
            }
            database.push(value)
        }
        else{

        }
    });
}
