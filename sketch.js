const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50);
    base=new Ground(200,380,400,30);
    box2=new Box(220,350,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    base.display();
    box1.display();
   
}