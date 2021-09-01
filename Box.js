class Box {
    constructor(x, y, r) {
        this.randomColor = random(360)
        var option = {
            restitution: 0.7,
            density: 1,
            friction: 0
        }
        this.body = Bodies.circle(x, y, r, option);
        World.add(world, this.body);

        this.r = r;
    }

    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        noStroke()
        fill(this.randomColor, 255, 255);
        ellipse(0, 0, this.r);
        pop()
    }
}

