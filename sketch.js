let graveyard;
let othergraveyard;
let song;
let z = 0;
let myFont;
let img;
let house;
let bricks;
let roof;
let balllightning;
let y = 0
let moon;
let scare;

function preload() {
  song = loadSound('spooky.mp3');
  graveyard = loadImage('graveyard.jpg');
  img = loadImage('ghost.JPG');
  othergraveyard = loadImage('othergraveyard.JPG');
  house = loadImage('house.JPG');
  bricks = loadImage('bricks.JPG');
  roof = loadImage('roof.JPG');
  balllightning = loadImage('balllightning.JPG');
  moon = loadImage('moon.JPG');
  scare = loadImage('scare.JPG')
  road = loadImage('road.JPG')
}

function setup() {
  song.play();
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);

}
  
function draw() {
 
  //BCKGRND
  othergraveyard.resize(width, height);
  image(othergraveyard, -300, -300);
  scare.resize(width,height);

  if(mouseIsPressed) {
    image(scare,-300,-300);
  } else {
    image(othergraveyard,-300,-300);
  }
  
  //BG BX
  fill('White');
  stroke('Black');
  //lights();
  push();
  translate(150, 40, 40);
  texture(house);
  box(150);
  pop();

  //BG ROOF
  noStroke();
  push();
  translate(107, -40, 200);
  rotate(180);
  texture(roof);
  cone(65, 30);
  pop();

  //BG GRND
  fill('DimGray');
  stroke('Black');
  push();
  translate(130, 100, 0);
  cone(-500, -20);
  pop();

  //CLMN 1
  noStroke();
  push();
  translate(60, 40, 30);
  texture(bricks);
  cylinder(20, 100);
  pop();

  //CLMN 2
  noStroke();
  push();
  translate(290, 40, 30);
  texture(bricks);
  cylinder(20, 100);
  pop();

  //CLMN 3
  noStroke();
  push();
  translate(60, 60, 150);
  texture(bricks);
  cylinder(15, 50);
  pop();

  //CLMN 4
  noStroke();
  push();
  translate(210, 60, 150);
  texture(bricks);
  cylinder(15, 50);
  pop();

  //ORB 1
  noStroke();
  push();
  translate(60, 20, 150);
  rotateY(y);
  texture(balllightning);
  sphere(10);
  pop();

  //ORB 2
  noStroke();
  push();
  translate(40, -20, 150);
  rotateY(y);
  texture(balllightning);
  sphere(10);
  pop();

  //ORB 3
  noStroke();
  push();
  translate(210, 20, 150);
  rotateY(y);
  texture(balllightning);
  sphere(10);
  pop();

  //ORB 4
  noStroke();
  push();
  translate(220, -20, 150);
  rotateY(y);
  texture(balllightning);
  sphere(10);
  pop();

  //MVNG SPHR
  noStroke();
  push();
  translate(-width / 2, -height / 2);
  translate(mouseX, height / 2, mouseY);
  texture(img);
  sphere(20);
  pop();

  //JMPSCR MN
  noStroke();
  push();
  translate(-30, -70, 30);
  texture(moon);
  sphere(40);
  pop();
  
  //DFLWRS
  fill('Black')
  noStroke();
  for (i = 0; i > 20; i++) {
    rotate(360 / 20);
    ellipse(70, 0, 70, 20);
}

  //HNTD
  fill('Black');
  noStroke();
  for (let i = 20; i < 600; i += 30) {
    for (let i = 0; i < 30; i++) {
      translate(200, 200);
      rotate(z);
      rotate(360 / 30);
      stroke('LightSlateGray');
      ellipse(10, 0, 80, 10);
    }
    z++
    y++
  }
}