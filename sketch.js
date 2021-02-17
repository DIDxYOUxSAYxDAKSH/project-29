const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var im1;

function preload(){
  getBackground();
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;


  ground1 = new GROUND(260,350,200,10);
  ground2 = new GROUND(585,250,130,10);

  b1 = new BLOCK(200,330);
  b2 = new BLOCK(220,330);
  b3 = new BLOCK(240,330);
  b4 = new BLOCK(260,330);
  b5 = new BLOCK(280,330);
  b6 = new BLOCK(300,330);
  b7 = new BLOCK(320,330);
  b8 = new BLOCK(220,300);
  b9 = new BLOCK(240,300);
  b10 = new BLOCK(260,300);
  b11 = new BLOCK(280,300);
  b12 = new BLOCK(300,300);
  b13 = new BLOCK(240,270);
  b14 = new BLOCK(260,270);
  b15 = new BLOCK(280,270);
  b16 = new BLOCK(260,240);

  b01 = new BLOCK(545,230);
  b02 = new BLOCK(565,230);
  b03 = new BLOCK(585,230);
  b04 = new BLOCK(605,230);
  b05 = new BLOCK(625,230);
  b06 = new BLOCK(565,200);
  b07 = new BLOCK(585,200);
  b08 = new BLOCK(605,200);
  b09 = new BLOCK(585,170);

  circle1 = Bodies.circle(100,150,20);
  World.add(world,circle1); 

  rope1 = new ROPE(circle1,{x:100,y:150})

  
  
  
}

function draw() {
  if(im1){
  background(im1)}

  Engine.update(engine);
  
  fill("orange");  
  ground1.display();
  ground2.display();

  fill("skyblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  //tower2
  b01.display();
  b02.display();
  b03.display();
  b04.display();
  b05.display();

  fill("lightgreen");
  b13.display();
  b14.display();
  b15.display();
  //tower2
  b06.display();
  b07.display();
  b08.display();

  fill("gray");
  b16.display();
  b09.display();

  rope1.display();

  ellipseMode(RADIUS);
  ellipse(circle1.position.x,circle1.position.y,20,20);

}

function mouseDragged(){
 Body.setPosition(circle1,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
  if(keyCode===32){
    rope1.attach(circle1);
  }
}
async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType = await response.json();
  var dateTime = responseType.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>10&& hour<20){
    im1 = loadImage("office.jpg");
  }else {
    im1 = loadImage("homer.jpg");
  }
}