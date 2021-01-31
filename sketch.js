
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(3000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 600, 1200, 20);

	box1 = new Box(600, 100, 70, 70);
	box2 = new Box(900, 100, 70, 70);
	box3 = new Box(900, 100, 70, 70);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
box1.display()
box2.display()
box3.display()	

  drawSprites();
 
}



