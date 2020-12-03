const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,645,1400,10);
	paper = new PaperBall(100,100,80);
	dustbin1 = new Dustbin(1060,625,150,30);
	dustbin2 = new Dustbin(1130,590,20,100);
	dustbin3 = new Dustbin(990,590,20,100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}



function keyPressed() {
  if(keyCode === UP_ARROW){}
   
  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-70})
}
