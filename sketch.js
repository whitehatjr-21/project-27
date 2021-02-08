const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var constraints1,constraints2,constraints3,constraints4,constraints5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    Bob1 = new Bob(450,400);
	Bob2 = new Bob(500,400);
	Bob3 = new Bob(550,400);
	Bob4 = new Bob(600,400);
	Bob5 = new Bob(650,400);
	constraints1 = new constraints(Bob1.body,{x:340,y:240})
	constraints2= new constraints(Bob2.body,{x:340,y:280})
	constraints3 = new constraints(Bob3.body,{x:340,y:320})
	constraints4 = new constraints(Bob4.body,{x:340,y:360})
	constraints5 = new constraints(Bob5.body,{x:340,y:400})

	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
   Bob1.display();
   Bob2.display();
   Bob3.display();
   Bob4.display();
   Bob5.display();
   constraints1.display();
   constraints2.display();
   constraints3.display();
   constraints4.display();
   constraints5.display();

  drawSprites();
 
}

function mouseDragged(){ 
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}