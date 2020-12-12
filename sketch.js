//PE is a framework  in which objects have properties like gravity,bounce,collide,scale,rotation 
//all principals of physics are applied to obejects which we create in PE
//Matter.js  is a library which is used to apply PE
var World = Matter.World;   // namespacing  
var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var engine,world,ground,ball;
var box1,box2;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();    //create engine
  world=engine.world;        //add world in engine
  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,50);
  ground=new Ground(200,390,400,20)
  Engine.run(engine);

}

function draw() {
  background(0,0,0);  
  box1.display();
  box2.display();
  ground.display();

}