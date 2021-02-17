class ROPE{
    constructor(body1,point2){
        var op={
          bodyA:body1,
          pointB:point2,
          length:10,
          stiffness:0.04            
        }
        this.constraint = Matter.Constraint.create(op);
        this.pointB = point2;
        World.add(world,this.constraint);

    }
    fly(){
        this.constraint.bodyA = null;
    }
    attach(abc){
        this.constraint.bodyA = abc
    }
    display(){
        if(this.constraint.bodyA){
       var aPos = this.constraint.bodyA.position;
       
       line(aPos.x,aPos.y,this.pointB.x,this.pointB.y);

        }
    }


}