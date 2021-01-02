
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree; 
var treeImage;
var ground;
var stone;
var boy;
var mango1;
var mango2;
var mango3;
var hand;

function preload()
{
	treeImage = loadImage("tree.png");
	boySkin = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(400,800,800,160);

    boy = createSprite(200,650,20,20);
	boy.addImage(boySkin);
	boy.scale = 0.125;

	stone = new Stone(140,600);
	//stone.scale = 0.6;

	mango1 = new Mango(500,300);
	mango2 = new Mango(600,200);
	mango3 = new Mango(700,300);

	hand = new Hand(140,600)
	
	tree = createSprite(600,400,20,20);
	tree.addImage(treeImage);
	tree.scale = 0.6;

	grip = new Grip(stone.body,{x:140, y:600});
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155,200,255);
  ground.display();
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  grip.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	grip.fly();
}

function detectCollision(LStone,LMango){
	mangoBP = LMango.body.position
	stoneBP = LStone.body.position

	var distance = dist(stoneBP.x, stoneBP.y, mangoBP.x, mangoBP.y);
	if(distance <= LMango.r + LStone.r){
		Matter.Body.setStatic(LMango.body, false);
	}
}

