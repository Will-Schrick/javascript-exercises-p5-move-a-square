
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


function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  square1 = new Square(100, 100, 75, color(255, 0,0));
}


function draw() {
  background(220); // Establece el fondo blanco
  square1.display();
}

class Square {
    constructor(x, y, w, col) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.col = col;
      this.xSpeed = random(2, 4);
      this.ySpeed = random(2, 4);
    }
    
    display() {
        fill(this.col);
        square(this.x, this.y, this.w); // Draw the square
      }
    }



    /*
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
    /*
    function left() {
        
    }
    */
