function PokeStats(type,hp,def,atk,legend){
this.type = type;
this.hp = hp;
this.def = def;
this.atk = atk;
this.legend = legend;
}

var hitmonchan = new PokeStats("Fighting", 210, 146, 193, false);
var machamp = new PokeStats("Fighting", 290, 148, 238, false);
var scrafty = new PokeStats("Dark, Fighting", 240, 211, 166, false);
var starmie = new PokeStats("Water, Psychic", 230, 157, 139, false);
var krookodile = new PokeStats("Dark, Ground", 300, 148, 215, false);
var mewtwo = new PokeStats("Psychic", 322,166,202,true);

var pokes = [hitmonchan,machamp,scrafty,starmie,krookodile,mewtwo]

function printPokes(pokes){
    console.log("Printing Pokemon")
for (var i=0; i<roster.length; i++)
console.log(roster[i])
}

 
