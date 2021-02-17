class GROUND{
    constructor(x,y,width,height){
        var op={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,op); 
        this.width = width;
        this.height = height; 
        World.add(world,this.body);      



    }

    display(){

        var rPos = this.body.position;
        rectMode(CENTER);
        rect(rPos.x,rPos.y,this.width,this.height);




    }


}