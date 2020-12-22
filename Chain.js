class Chain{
    constructor(body1,body2,xOffset){
        
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB: {x:xOffset,y:0}
        }
        this.xOffset = xOffset;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
 
    line (pointA.x,pointA.y,pointB.x + this.xOffset,pointB.y)
    }
}