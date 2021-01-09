class Rope{
	constructor(body1,locB)
	{
		
		var options={
			bodyA:body1,
			
			pointB: locB
			
		}
		
		this.pointB= locB
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		strokeWeight(2)
		stroke("#BE8260")
		
		var pointA=this.rope.bodyA.position;
		var pointb=this.pointB;
		
		
		//push()
		
		line(pointA.x,pointA.y,pointb.x,pointb.y);
		//pop()
	}

}