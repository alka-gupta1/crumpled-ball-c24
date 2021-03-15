
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create()
	
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(200,200,15)
ground = new Ground(400,680,800)
box1 = new Dustbin(650,670,100,10)
box2 = new Dustbin(605,650,10,40)
box3 = new Dustbin(700,650,10,40)

var render = Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:800,
		height:700,
		wireframes:false
	}

});
Render.run(render)

	Engine.run(engine);
	console.log(paper.body.force)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
 ground.display();
 box1.display()
 box2.display()
 box3.display()

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:55});
	}
}


