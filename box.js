class Box {
  constructor(x, y,height) {
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.box = Bodies.rectangle(x, y, 40, height, options);
    this.width = 40;
    this.height = height;
    
    World.add(world, this.box);
  }

  display(){
    var pos =this.box.position;
    var angle=this.box.angle;
    push();
   translate(pos.x,pos.y);
   rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
