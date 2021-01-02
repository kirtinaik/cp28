class Stone {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        //var r;
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        //this.image.scale = 0.5;
        //ellipse(0,0,70);
        pop();
      }
}