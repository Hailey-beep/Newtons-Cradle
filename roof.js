class Roof {

    constructor() {

    this.body = Bodies.rectangle(400,100,100,150, {isStatic:true})
    this.width = 400
    this.height = 35

    World.add(world, this.body)
    }

    display() {

        var pos = this.body.position

        push()
        noStroke()
        fill("darkblue")
        rectMode()
        rect(pos.x, pos.y, this.width, this.height)
        pop()
    }
}