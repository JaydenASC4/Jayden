function setup(){
createCanvas(600,600);
background(100);
};
function draw(){
fill(random(255),random(255),random(255));
rect(25,25,25,25)
};

function mouseDragged() {
  ellipse(random(mouseX),random(mouseY),random(mouseX),random(mouseY));
  rect(random(mouseX),random(mouseY),random(mouseX),random(mouseY))
  value = value + 5;
  if (value > 255) {
      value = 0;
      for (var i = 0; i < 100 ; i++){
      var r = random(-50, 50);
      ellipse(50,i,50+r,i);
      
      return false;
  }
}
};
mouseDragged();
