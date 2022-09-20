let ground;
let lander;
var lander_img;
var bg_img;
var up_anim, left_anim, right_anim, landing_anim, broke_anim, obstacle2;
var stoped, base, obstacle, selfDestruction_anim, base_img, obstacle_img;
var invisible_ground;

var vy = 0;
var vx = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
  up_anim = loadAnimation("b_thrust_1.png", "b_thrust_2.png", "b_thrust_3.png");
  left_anim = loadAnimation("left_thruster_1.png", "left_thruster_2.png");
  right_anim = loadAnimation("right_thruster_1.png", "right_thruster_2.png");
  landing_anim = loadAnimation("landing1.png", "landing2.png", "landing3.png");
  broke_anim = loadAnimation("crash1.png", "crash2.png", "crash3.png");
  stoped = loadAnimation("normal.png");
  base_img = loadImage("lz.png");
  obstacle_img = loadImage("obstacle.png");
  selfDestruction_anim = loadAnimation("crash3.png");


  up_anim.looping = false;
  left_anim.looping = false;
  right_anim.looping = false;
  landing_anim.looping = false;
  broke_anim.looping = false;
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

//adicionando animações
lander.addAnimation("up", up_anim);
lander.addAnimation("left", left_anim);
lander.addAnimation("right", right_anim);
lander.addAnimation("down", landing_anim);
lander.addAnimation("destroy", broke_anim);
lander.addAnimation("selfDestruction", selfDestruction_anim);


obstacle = createSprite(320,530,50,5);
obstacle.addImage(obstacle_img);
obstacle.scale=0.5;
obstacle.setCollider("rectangle",0,100,300,300);

obstacle2 = createSprite(575,325,50,5);
obstacle2.addImage(obstacle_img);
obstacle2.scale=0.75;
obstacle2.setCollider("rectangle",0,100,300,300);


base = createSprite(850,550,50,30);
base.addImage(base_img);
base.scale=0.4;
base.setCollider("rectangle",0,180,400,400);

invisible_ground = createSprite(500,690,1100,20);
invisible_ground.visible = false;


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  createCanvas(1000,700);

  background(51);
  image(bg_img,0,0);

  //escrevendo na tela
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //descida
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation("up");
    thrust.nextFrame();
    
  }

  if(keyCode==LEFT_ARROW)
  {
    leftward_thrust();
    lander.changeAnimation("left");
    
  }

  if(keyCode==RIGHT_ARROW)
  {
    rightward_thrust();
    lander.changeAnimation("right");
    
  }

  //botão de autodestruição(letra Q)
  if(keyCode==81)
  {


    lander.changeAnimation("selfDestruction");
    
  }

}

function upward_thrust()
{
  vy = -100;
}

function leftward_thrust()
{
  vx = -1;
}

function rightward_thrust()
{
  vx = +1;
}

