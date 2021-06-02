function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  
  animationSettings();
  strokeColors();
  bgColors();
}

function draw() {
  
  background(bgRedBoxInput.value(), bgGreenBoxInput.value(), bgBlueBoxInput.value(), 255);
  translate(width / 2, height / 2);
  noFill();
  strokeWeight(8);
  
  for (var n = 0; n < elementSlider.value(); n++) {
    
    stroke(strokeRedBoxInput.value(), strokeGreenBoxInput.value(), strokeBlueBoxInput.value());
    beginShape();
    
    for (var i = 0; i < 360; i += fragmentSlider.value()) {
      var rad = map(sin(i * partSlider.value() + frameCount), -1, 1, minRadSlider.value(), maxRadSlider.value());
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }

    endShape(CLOSE);
    rotate(frameCount * rotSpeedSlider.value());
  };
}

function animationSettings() {

  elementSlider = createSlider(1, 10, 5, 1).position(20, 750);
  elementP = createP('# of elements').position(20, 710);
  partSlider = createSlider(2, 8, 5, 1).position(220, 750);
  partP = createP('# of parts').position(220, 710);
  fragmentSlider = createSlider(3, 30, 3, 1).position(420, 750);
  fragmentP = createP('# of fragments').position(420, 710);
  minRadSlider = createSlider(25, 300, 100, 10).position(20, 850);
  minRadP = createP('Minimum radius').position(20, 810);
  maxRadSlider = createSlider(50, 300, 200, 10).position(220, 850);
  maxRadP = createP('Maximum radius').position(220, 810);
  rotSpeedSlider = createSlider(0.1, 1, 0.1, 0.05).position(420, 850);
  rotSpeedP = createP('Rotation speed').position(420, 810);

  
}

function strokeColors() {

  strokeColorsP = createP('Stroke colors').style('font-weight', 'bold').position(710, 0);
  strokeRedBoxInput = createInput(200).position(710, 70);
  strokeRedBoxP = createP('Red (0-255)').position(710, 30);
  strokeGreenBoxInput = createInput(50).position(710, 130);
  strokeGreenBoxP = createP('Green (0-255)').position(710, 90);
  strokeBlueBoxInput = createInput(100).position(710, 190);
  strokeBlueBoxP = createP('Blue (0-255)').position(710, 150);
  
}

function bgColors() {

  bgColorsP = createP('Background colors').style('font-weight', 'bold').position(710, 220);
  bgRedBoxInput = createInput(40).position(710, 290);
  bgRedBoxP = createP('Red (0-255)').position(710, 250);
  bgGreenBoxInput = createInput(42).position(710, 350);
  bgGreenBoxP = createP('Green (0-255)').position(710, 310);
  bgBlueBoxInput = createInput(54).position(710, 410);
  bgBlueBoxP = createP('Green (0-255)').position(710, 370);  
  
}
