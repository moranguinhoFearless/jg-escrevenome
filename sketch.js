function setup(){
    createCanvas(500, 500);
    background('purple');
  }
  
  function draw() {
   
    stroke('yellow');
    fill('pink');
  
  // console.log(mouseIsPressed);
  
    if(mouseIsPressed){
    rect(mouseX, mouseY, 25, 25);
    }
  }