const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function setup() {
  createCanvas(480,800);
  ground = new Ground(240,795,480,10);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background("black");  
  ground.display();
  drawSprites();
}