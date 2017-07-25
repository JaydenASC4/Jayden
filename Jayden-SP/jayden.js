function setup(){
    createCanvas(500,500);
    background(200);
}
var mouseX;
var mouseY;
function draw(){
    background(200);
    fill(random(255),random(255),random(255));
    rect(mouseX,mouseY,50,50);
}
function mousePressed(){
for(i=0; i<500; i++){
    ellipse(mouseX,i,25,25);

}
    }

mousePressed()
