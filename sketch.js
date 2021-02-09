
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20)
	ball=new Ball(100,630,40)
	Dustinbase=new Dustin(600,655,200,20)
    Dustinside1=new Dustin(500,615,20,100)
    Dustinside2=new Dustin(700,615,20,100)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  Dustinbase.display()
  Dustinside1.display()
  Dustinside2.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
	   
	 }
   }



