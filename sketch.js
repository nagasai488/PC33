
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg;
var rand;
var snow=[];


function preload(){
bg=loadImage("snow2.jpg");


}


function setup() {
  createCanvas(1000,450);
  engine=Engine.create();
  world=engine.world;

 
}

function draw() {
  background(bg);
Engine.update(engine);

rand=Math.round(random(1,10));

  if(frameCount%20===0){
     snow.push(new Snow(random(0,900),30,30));

  }
  for (var i=0;i<snow.length;i++){
    snow[i].display()

  }
drawSprites()
}






  