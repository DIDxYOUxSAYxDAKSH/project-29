class BLOCK{
    constructor(x,y){
        var op={
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,20,30,op);
        World.add(world,this.body);
        this.visibility = 255;


    }
    display(){
        if(this.body.speed<3){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,20,30);
        }else{
            World.remove(world,this.body);
            this.visibility = this.visibility - 2; 
            tint(255,this.visibility);
        
        }
        
    }


}