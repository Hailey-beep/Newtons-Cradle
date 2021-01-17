class Rope {

    constructor(Body1, Body2, offsetX, offsetY) {

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
        bodyA: Body1,
        bodyB: Body2,
        length: 300,
        stiffness: 0.1,
        pointB: {x:this.offsetX, y:this.offsetY}
    }

        this.rope = Constraint.create(options);
        console.log(options)
        World.add(world, this.rope);

    }

    display() {
        var positionA = this.rope.bodyA.position;
        var positionB = this.rope.bodyB.position;

        stroke("black")
        strokeWeight(2)
        //This draws a visible line between the two bodies
        line(positionA.x, positionA.y, positionB.x + this.offsetX, positionB.y + this.offsetY)
    }
}