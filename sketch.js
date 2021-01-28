
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bob1, bob2, bob3, bob4, bob5 ;
var rope;
var Roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(130,50,70,20)
bob1 = new Bob(100,100,30);
bob2 = new Bob(115,100,30);
bob3 = new Bob(130,100,30);
bob4 = new Bob(145,100,30);
bob5 = new Bob(160,100,30);
rope = new rope( bobObject1.Body,roofObject.Body,-bobDiameter*2, 0 )



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

display()
{
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;
 
strokeWeight(2);
 
var Anchor1X = pointA.x
var Anchor1Y = pointA.y

var Anchor2X = pointB.x+this.offsetX
var Anchor2Y = pointY.x+this.offsetY
 
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}


