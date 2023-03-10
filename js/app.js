function setup() {
    myCanvas = createCanvas(800,500);
    myCanvas.parent('myContainer');
}

function draw() {
    background(212,102,120);
    fill(20,225,0);
    noSmooth();
    noStroke();

    // push();
    // // noFill();
    // square(250,100,300)
    // pop();

    // helperCoordinates();

    let d=dist(width/2,height/2,mouseX,mouseY);

    push();
    if (mouseX > 250 && mouseX < 550 && mouseY > 100 && mouseY < 400){
        circle(mouseX,mouseY,10)
    } else {
        circle(mouseX,mouseY,d/10)
    }
    pop();

}

function helperCoordinates() { //show coordinates of cursor
    fill(0);
    text(
        '(' +
        floor(mouseX) +
        ',' +
        floor(mouseY) +
        ')',
        mouseX,
        mouseY
    );
    }