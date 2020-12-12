
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ballObject1,ballObject2,ballObject3, ballObject4,ballObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20);

	ballDiameter=40;

	startballPositionX=width/2;
	startballPositionY=height/4+250;
	ballObject1=new Ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
	ballObject2=new Ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ballObject3=new Ball(startballPositionX,startballPositionY,ballDiameter);
	ballObject4=new Ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ballObject5=new Ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);
	




	rope1=new Rope(ballObject1.body,roofObject.body,-ballDiameter*2, 0)

	rope2=new Rope(ballObject2.body,roofObject.body,-ballDiameter*1, 0)
	rope3=new Rope(ballObject3.body,roofObject.body,0, 0)
	rope4=new Rope(ballObject4.body,roofObject.body,ballDiameter*1, 0)
	rope5=new Rope(ballObject5.body,roofObject.body,ballDiameter*2, 0)

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-50,y:-45});

    }
    
    if (keyCode === DOWN_ARROW) {

      Matter.Body.applyForce(ballObject5.body,ballObject5.body.position,{x:50,y:-45});
  
    }
}

function drawLine(constraint)
{
	ballBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX,roofBodyY);
}






