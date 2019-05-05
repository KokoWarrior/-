// Creating variables
var myX = 0, myY = 00,velocity=5,updates=0;


function update() {
    //W,A,S,D Movement
    if (isKeyPressed[87]) myY-=velocity;
    if (isKeyPressed[83]) myY+=velocity;
    if (isKeyPressed[65]) myX-=velocity;
    if (isKeyPressed[68]) myX+=velocity;
}

function draw() {
    //Draws an object
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
