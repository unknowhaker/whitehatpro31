const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var engine, world;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,795,480,10);
 

}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  ground.display();
  
}
