class Star{
    constructor(){
        this.x = random(-width,width);
        this.y = random(-height,height);
        this.z = random(width);
        this.prevZ = this.z;
    }

    Move(){
        this.z = this.z - speed;
        if(this.z < 1){
            this.x = random(-width,width);
            this.y = random(-height,height);
            this.z = width;
            this.prevZ = this.z;
        }
    }

    Show(){

        let prevX = map(this.x / this.z,0,1,0,width);
        let prevY = map(this.y / this.z,0,1,0,height);
        let starWidth = map(this.z,0,width,10,0);

        fill(255);
        noStroke();
        ellipse(prevX,prevY,starWidth);

        let currentX = map(this.x / this.prevZ,0,1,0,width);
        let currentY = map(this.y / this.prevZ,0,1,0,height);

        this.prevZ = this.z;

        stroke(255,100);
        strokeWeight(2);
        line(prevX,prevY,currentX,currentY);

    }
}