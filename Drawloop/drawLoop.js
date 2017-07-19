function setup(){
createCanvas(500,500);
background(200);
}

var x = 0;
var y = 0;
function draw(){
    background(200);
    fill(random(225),random(225),random(225));
ellipse(x,y,30,30);


x++;
y++;
}
