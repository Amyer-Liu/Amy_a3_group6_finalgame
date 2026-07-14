// Start screen "PRESS START" hit area (as fractions of canvas size,
// so it stays aligned no matter how startBg gets stretched)
let startButtonBox = {
  xFrac: 0.5,
  yFrac: 0.905,
  wFrac: 0.19,
  hFrac: 0.075
};

let DEBUG_START_BUTTON = false; // flip true to visualize the click zone

function drawStartScreen() {
  imageMode(CORNER);
  image(startBg, 0, 0, width, height);

  drawStartButtonOverlay();
}

function getStartButtonRect() {
  let bw = width * startButtonBox.wFrac;
  let bh = height * startButtonBox.hFrac;
  let bx = width * startButtonBox.xFrac;
  let by = height * startButtonBox.yFrac;
  return { bx, by, bw, bh };
}

function drawStartButtonOverlay() {
  let { bx, by, bw, bh } = getStartButtonRect();

  let hover = mouseX > bx - bw/2 && mouseX < bx + bw/2 &&
              mouseY > by - bh/2 && mouseY < by + bh/2;

  if (hover) {
    cursor(HAND);
    noStroke();
    fill(255, 255, 255, 40);
    rect(bx - bw/2, by - bh/2, bw, bh, 10);
  } else {
    cursor(ARROW);
  }

  if (DEBUG_START_BUTTON) {
    push();
    noFill();
    stroke(255, 0, 0);
    strokeWeight(2);
    rect(bx - bw/2, by - bh/2, bw, bh);
    pop();
  }
}
