/*
function setup() {
    createCanvas(400, 400);
    }
    
    function draw() {
        background(220);
        fill(255, 0, 0);
        square(200, 200, 50);
        }
//THE ABOVE WORKS WITH A RED SQUARE -ok
//Step 2. .i need to use class to put it inside SETUP
*/

let square1;

//Step 4 is complete with thiscode below
/*function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  square1 = new Square(100, 100, 75, color(255, 0, 0));
}
  */
//end step 4

// Step 5 below
function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  square1 = new Square(100, 100, 150, color(255, 0, 0));
}

function draw() {
 // background(220); //  gray background - completed to step 4
  background(100);  // step 5 darker color
  square1.display();
}

class Square {
  constructor(x, y, w, col) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.col = col;
    this.xSpeed = 50;  // faster
    this.ySpeed = 50;   // faster
  }

  display() {
    fill(this.col);
    square(this.x, this.y, this.w); // Draw the square
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    left();
  } else if (keyCode === RIGHT_ARROW) {
    right();
  }
  if (keyCode === UP_ARROW) {
    up();
  } else if (keyCode === DOWN_ARROW) {
    down();
  }
}

function left() {
   //square1.x -= 10;  step 4
   square1.x -= 50 // step 5
  if (square1.x < 0) {
    square1.x = 0;
  }
}


function right() {
    //square1.x += 10;  step 4
    square1.x += 50;  //  step 5 - faster
    if (square1.x + square1.w >= 400) {
        square1.x = 400 - square1.w; 
    }
  }

  function up() {
    //square1.y -= 10;  step 4
    square1.y -= 50; //step 5
    if (square1.y < 0) { 
      square1.y = 0; 
    }
  }

  function down() {
    //square1.y += 10;  // step 4
    square1.y += 50; // step 5
    if (square1.y + square1.w > 400) { 
      square1.y = 400 - square1.w; 
    }
  }


