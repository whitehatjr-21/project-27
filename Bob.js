class Bob {
    constructor(x,y,width,height){
        var option = {
            'restitution':0.8,
            'friction':1.0,
            'density':2
          };
        this.body = Bodies.rectangle(x,y,25,25,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("red");
        ellipse(pos.x,pos.y,this.width,this.height);
    }
  
}