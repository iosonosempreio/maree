let n = 15,
    k = 180/(n),
    min = 5;

function setup() {
  createCanvas(Math.max(windowWidth,windowHeight),Math.max(windowWidth,windowHeight));
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(169, 223, 191);

  for(i=0; i<=n; i++) {
    for (j=0; j<=n; j++){
      let x = i*width/n,
          y = j*height/n,
          angle = -i*k + -j*k + frameCount%360*2,
          size = width/n+min,
          r = map(cos(angle),-1,1, -size, size),
          lerp = Math.abs(cos(angle)),
          lerped = lerpColor(color(250, 215, 160, 230),color(249, 231, 159, 230),lerp);

      r = Math.abs(r) + min;

      fill(lerped)
      ellipse(x,y,r);
    }
  }

}
