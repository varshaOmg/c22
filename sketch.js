
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, ball, ground;


function setup() {
  createCanvas(400,400);

engine = Engine.create()
world = engine.world;

var options={
  restitution : 1.0
  }
  
  ball = Bodies.circle(200,200,40,options)
  World.add(world,object);
console.log(object)
var goptions={
  isStatic: true
  }
  
  ground = Bodies.rectangle(200,200,150,70,goptions)
  World.add(world,ground);

}

function draw() {
  background('lightgreen'); 
  Engine.update(engine)

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,100,100)

rectMode(CENTER)
rect(ground.position.x,ground.postion.y,150,50)

  
}