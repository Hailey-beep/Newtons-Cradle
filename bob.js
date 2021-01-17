class Bob {

    constructor(x,y) {

        var options = {isStatic:false, restitution:0.9, friction:1, density:1}

        //the position of the circle
        this.body = Bodies.circle(x,y,30,options);
        //The size/display of the circle
        this.radius = 60;

        World.add(world, this.body)
    }

    display() {

        var pos = this.body.position

        push()
        rectMode(CENTER)
        noStroke()
        fill("grey")
        ellipse(pos.x, pos.y, this.radius)
        pop()
    }
}