let stars = [];
let speed;

function setup(){
    createCanvas(800,800);
    for(let ct = 0; ct < 2000; ct++){
        stars[ct] = new Star();
    }
}

function draw(){
    speed = map(mouseX,0,width,0,10);
    background(0);
    translate(width / 2, height / 2);
    for(let star of stars){
        star.Move();
        star.Show();
    }
}