class Circle{
    constructor(x, y, radius) {
        var options = {
           static: true
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       ellipseMode(CENTER);
       ellipse (0,0,this.radius,this.radius);
        pop();
      }
}