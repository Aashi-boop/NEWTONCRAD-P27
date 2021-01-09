
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var	bob1,bob2,bob3,bob4,bob5, roof;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof();

	bob1=new bob(300,300);
	bob2=new bob(350,300);
	bob3=new bob(400,300);
	bob4=new bob(450,300);
	bob5=new bob(500,300);
	
	/*rope1= new Ropexx(bob1.body,roof.body)
	rope2= new Ropexx(bob2.body,roof.body)
	rope3= new Ropexx(bob3.body,roof.body)
	rope4= new Ropexx(bob4.body,roof.body)
	rope5= new Ropexx(bob5.body,roof.body)
	//Create a Ground
	*/
	rope1= new Rope(bob1.body, {x:300, y:100})
	rope2= new Rope(bob2.body,{x:350, y:100})
	rope3= new Rope(bob3.body,{x:400, y:100})
	rope4= new Rope(bob4.body,{x:450, y:100})
	rope5= new Rope(bob5.body,{x:500, y:100})

	/*var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Render.run(render); */
  
}


function draw() 
{
  	rectMode(CENTER);
  	background("#118C8B");
	Engine.update(engine)

  	roof.display();

 	rope1.display();
  	rope2.display();
  	rope3.display();
  	rope4.display();
	rope5.display();
	  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
 
 
}

function keyPressed() 
{
	  if (keyCode === UP_ARROW) 
	  {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50, y:-50})	

  	}
}





