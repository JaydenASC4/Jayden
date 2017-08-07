var HP = 100;
var num = 0;
var gold = 0;

function updateStats(){
    $("#stats").text('HP: ' + HP + '// GOLD: ' + gold + 'Ogres Slain : ' + num);
}

function setup(){
$("body").append("<h1> Welcome to Ogre Fighterv.1.0</h1>");
$("body").append("<div><h3>STATS</h3><p id='stats>'></p></div>");
$("body").append("<button onclick='attack()'>Attack the ogre!</button>");
$("body").append("<div id='ogres'></div>")
updateStats(HP,num,gold)


}

function attack(){
    if(HP > 0){
        if(Math.random() * 100 > gold){
            $("#ogre").prepend("<p>you won! + 10 gold.</p>");
        }
    }

}

$(document).ready(setup);

