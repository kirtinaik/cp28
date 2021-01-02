class Mango{
    constructor(x,y){
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        pop();
    }
}