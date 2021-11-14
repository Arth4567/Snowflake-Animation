const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var world, engine
var backGround
var snow


function preload(){

backGround = loadImage("snow1.jpg")

}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create()
  world = engine.world

snow = new Snow(700,100,100,100)  

}

function draw() {
  background(backGround); 
  Engine.update(engine)
  

snow.display()


}