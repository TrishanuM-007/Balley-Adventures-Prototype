const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var start
var name1
var name2
var balley


var engine, world;
gameState = "start"


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
 start = createSprite(400,500,200,50);
 name1 = createSprite(250,150,375,200);
 name2 = createSprite(550,275,375,200);
start.shapeColor = "Orange"
name1.shapeColor = "#DC143C"
name2.shapeColor = "#DC143C"
balley = new Balley(20,30,50,20);
plat1 = new Ground(20,100,100,10)


   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    if(gameState === "start"){
    drawSprites();
    textSize(25);
fill("black")
    text("START",360,510);
    fill("yellow")
    textSize(100)
    text("Balley",100,175);
    text("Game",410,310)
    if(mousePressedOver(start)){
        gameState = "play"
    }
    }
   
    if(gameState === "play"){
        //console.log(balley);
        if(keyIsDown(RIGHT_ARROW)){
           Matter.Body.setVelocity(balley.body,balley.body.velocity - 3);

        }
        balley.display()
        plat1.display()
       
     
    
    }
}
