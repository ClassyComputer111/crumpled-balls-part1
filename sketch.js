
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin,paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
	dustbin = new Dustbin(650,370)
	
	paper = new Paper(200,350,10);
	ground = Bodies.rectangle(width / 2,370,width,10,
		{
			isStatic: true

		});
		World.add(world,ground);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-4})
	}
}



