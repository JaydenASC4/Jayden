function setup(){
    createCanvas(400,400);
    background(200);
}

var row1 = ["nu","nu","nu","nu"];
var row2 = ["nu","nu","nu","nu"];
var row3 = ["nu","nu","nu","nu"];
var row4 = ["nu","nu","nu","nu"];
var board = [row1,row2,row3,row4]
random(board[random(0, 3)]) = "su";
function draw(row1,row2,row3,row4){
stroke(0);
for(var i=0 ; i<board.length ; i++){
for(var j=0 ; j<board.length ; j++){
    if(board[i][j]=="nu"||board[i][j]=="su"){
    fill(200);
}
else if(board[i][j]=="nc"){
    fill(0);
}
else if(board[i][j]=="sc"){
    fill(255,0,0);
}
rect(j*100,i*100,100,100)
}
}
}

function mouseClicked(){


if (board[floor(mouseY/100)][floor(mouseX/100)]=="nu"){
    board[floor(mouseY/100)][floor(mouseX/100)]="nc";

}
else if  (board[floor(mouseY/100)][floor(mouseX/100)]=="su"){
    board[floor(mouseY/100)][floor(mouseX/100)]="sc";
}

}







  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   




























