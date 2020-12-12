class Box
{
    constructor(x,y,w,h){
    this.body=Bodies.rectangle(x,y,w,h);
    World.add(world,this.body);

    }
    display()
    {
        var p=this.body.position;
        var a=this.body.angle;
        push();                        //for new setting
        translate(p.x,p.y);            //to change the position
        rotate(a);                     // to change the angle
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();                         // change settings to zero   
    }
};