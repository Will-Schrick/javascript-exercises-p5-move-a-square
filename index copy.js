let square1;
let square2;

function setup() {
  createCanvas(400, 400);
  square1 = new Square(100, 200, 50, color(255, 0, 0));
  square2 = new Square(300, 200, 30, color(0, 0, 255));
}

function draw() {
  background(220);

  square1.move();        // Mover el primer cuadrado
  square2.move();        // Mover el segundo cuadrado

  if (square1.isColliding(square2)) {   // Verificar colisión entre los dos cuadrados
    square1.changeDirection();         // Cambiar la dirección del primer cuadrado
    square2.changeDirection();         // Cambiar la dirección del segundo cuadrado
  }

  square1.display();    // Mostrar el primer cuadrado
  square2.display();    // Mostrar el segundo cuadrado
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

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width - this.w) {
      this.xSpeed *= -1;  // Cambiar dirección si el cuadrado toca los bordes horizontales
    }

    if (this.y < 0 || this.y > height - this.w) {
      this.ySpeed *= -1;  // Cambiar dirección si el cuadrado toca los bordes verticales
    }
  }

  isColliding(object) {
    return (
      this.x < object.x + object.w &&
      this.x + this.w > object.x &&
      this.y < object.y + object.w &&
      this.y + this.w > object.y
    );
  }

  changeDirection() {
    this.xSpeed *= -1;  // Cambiar dirección horizontal
    this.ySpeed *= -1;  // Cambiar dirección vertical
  }

  display() {
    fill(this.col);
    noStroke();
    rect(this.x, this.y, this.w, this.w);
  }
}
</script>
</body>
</html>