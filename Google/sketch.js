const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
function preload(){
}
function setup(){
    createCanvas(1500,900);
  engine = Engine.create();
  world = engine.world
  ground1 = new ground(500,1250,1500,900)
  ground2 = new ground(-50,450,100,900)
  ground3 = new ground(1300,450,100,900)
  ob1 = new more(1100,230,20,20)
  ob2 = new googly(250,100)
  ob3 = new Gs(510,500,90,30)
  ob4 = new ifl(620,500,100,30)
  ob5 = new image1(1050,230,40,15)
  ob6 = new search1(550,450,500,30)
  ob7 = new mailing(990,230,40,10)
  ob8 = new signIn(1150,230,45,20)
  
}
function draw(){
    background("white")
   Engine.update(engine)
   ob1.display()
   ob2.display()
   ob2.body.position.x = mouseX
   ob2.body.position.y = mouseY
   ob3.display()
   ob4.display();
   ob5.display()
   ob6.display()
   ob7.display();
      ob8.display()

   ground2.display()
   ground1.display()
   ground3.display()
  // Dragged()
}

