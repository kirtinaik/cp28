class Hand {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}