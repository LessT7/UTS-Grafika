function setup() {
  createCanvas(700, 600);
}

function draw() {
  background(135, 206, 250);

  fill(255, 250, 0);
  circle(350, 360, 150);

  fill(34, 139, 34);
  triangle(0, 400, 350, 400, 150, 300);

  fill(34, 139, 34);
  triangle(350, 400, 700, 400, 500, 300);
  
  fill(105, 105, 105);
  beginShape();
  vertex(280, 400);
  vertex(420, 400);
  vertex(300, height);
  vertex(150, height);
  endShape(CLOSE);
  
  drawBird(100, 100);
  drawBird(150, 150);
  drawBird(200, 120);
  drawBird(400, 120);
  drawBird(450, 100);
  drawBird(500, 150);
  
  function drawBird(x, y) {
  fill(0);
  noStroke();
  arc(x, y, 20, 20, PI, TWO_PI);
  arc(x + 20, y, 20, 20, PI, TWO_PI);
}
}


