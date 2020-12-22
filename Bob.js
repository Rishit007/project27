class Bob{ 
    constructor(x,y) { 
        var options ={ restitution:1, friction:0.5, density:0.7} 
        this.body = Bodies.circle(x,y,25,options); 
        this.radius = 25; 
        World.add(world,this.body); 
    } 
    
    display() { 
        var pos = this.body.position; 
        
        
         fill("purple"); 
         ellipse(pos.x,pos.y,50,50); 
        } 
    }