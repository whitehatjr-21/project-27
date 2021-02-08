class constraints{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB:pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB = pointB
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint );
    }
    display(){
    if(this.constraint.bodyA){
    var pointA = this.constraint.bodyA.position
    var pointB = this.pointB
    push()
    strokeWeight(2);
    stroke("black")
    line(pointB.x, pointB.y, pointA.x, pointA.y);
    pop()
    }
    }
}