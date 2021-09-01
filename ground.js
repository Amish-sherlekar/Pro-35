class Ground
{
    constructor(x,y,width,height,angle)
    {
        var option={
            'restitution' : 0.8,
            'friction': 2.4,
            'density': 0.1,
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle);
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill("grey")
        stroke(255)
        strokeWeight(4)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}