const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 


function preload() {
    //polygon_img = image("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    
net1left = new Ground(100,600,20,100)
net1bottom = new Ground(150,650,100,20)
net1right = new Ground(200,600,20,100)

net2right = new Ground(300,700,20,100)
net2left = new Ground(350,750,100,20)
net2bottom= new Ground(400,700,20,100)

net3right = new Ground(500,600,20,100)
net3left = new Ground(550,650,100,20)
net3bottom= new Ground(600,600,20,100)

net4right = new Ground(700,700,20,100)
net4left = new Ground(750,750,100,20)
net4bottom= new Ground(800,700,20,100)

net5right = new Ground(900,600,20,100)
net5left = new Ground(950,650,100,20)
net5bottom= new Ground(1000,600,20,100)


    
ball = new Polygon(200,100,50,50)
sling = new Slingshot(ball.body,{x:200,y:100})

//ground3 = new Ground(600,370,1200,20)
//polygon = Bodies.circle(50,200,20);
//World.add(world,polygon)
//slingshot = new SlingShot(this.polygon,{x:100,y:200})

    



    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);
    // ground3.display()
    ball.display()
    sling.display()

    net1left.display()
    net1bottom.display()
    net1right.display()

    net2right.display()
    net2bottom.display()
    net2left.display()

    net3right.display()
    net3bottom.display()
    net3left.display()

    net4right.display()
    net4bottom.display()
    net4left.display()

    net5right.display()
    net5bottom.display()
    net5left.display()

    
   // slingshot.display()
   // image(polygon_img, polygon.position.x, polygon.position.y, 40,40)






}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
if(keyCode === 32){
    sling.attach(ball.body)
}
}

// function keyPressed(){
    //if(keyCode === 32){
    //   Matter.Body.setPosition(stone.body,{x:150,y:500})
    //   rope.attach(stone.body)
    // }
    // }