class Bob{
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
    this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      //this.height = height;
      World.add(world, this.body);
      //this.paper = loadImage("sprites/paper.png");
      
    }
    display(){
      var angle =this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //imageMode(CENTER);
      //image(this.paper, pos.x,pos.y,70);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0, this.radius)
      pop();
    }
}