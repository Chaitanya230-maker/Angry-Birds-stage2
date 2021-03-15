class Slingshot
{
    constructor(bodyA,pointB)
    {
        var Option={bodyA:bodyA,pointB:pointB,stiffness:0.04,length:10}
        this.Slingshot=Matter.Constraint.create(Option);
        World.add(world,this.Slingshot);

    }
    fly()
    {
        this.Slingshot.bodyA=null;
    }
    
    display(){
        if(this.Slingshot.bodyA!==null){
        push();
        strokeWeight(5);
        stroke("orange");
        line(this.Slingshot.bodyA.position.x,this.Slingshot.bodyA.position.y,this.Slingshot.pointB.x,this.Slingshot.pointB.y);
        pop();}
    }

    
}