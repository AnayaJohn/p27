class Rope{
    constructor(body1, body2,offsetX,offsetY){
       this.offsetX=offsetX;
       this.offsetY=offsetY;

       var options={
         bodyA: bodyA,
          bodyB: bodyB,
         pointB:{x: offsetX, y:offsetY}
   //stiffness: 0.05,
   //ength: 50
        };
        
   this.rope= Constraint.create(options);
   World.add(world,this.rope);
    }
     
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        
        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

   line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
   }