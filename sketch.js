let x = 320;
let y = 180;
let xspeed = 70;
let yspeed = 40;

let r = 210;

function setup() {
  createCanvas(1000, 655);
}
function draw() {
  background(0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  

}
