function setup() {
    myCanvas = createCanvas(800,500);
    myCanvas.parent('myContainer');
}

function draw() {
    background(212,102,120);
    fill(20,225,0);
    noSmooth();
    noStroke();

    push();
    // noFill();
    square(250,100,300)
    pop();

    let d=dist()

}