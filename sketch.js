const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var boxes = [];
var ground1, ground2, ground3;
var goal1, goal2, goal3;
function preload() {
    bg = loadImage("download.jpeg");
}

function setup() {
    canvas = createCanvas(500, 600);
    colorMode(HSB)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    box1 = new Box(230, 200, 20, 20);
    ground1 = new Ground(150, 180, 20, 250, PI / -3);
    ground2 = new Ground(380, 300, 20, 250, PI / 3);
    ground3 = new Ground(140, 400, 20, 250, PI / -3);
    ground4 = new Ground(380, 500, 20, 250, PI / 3);

}

function mouseClicked() {

}

function draw() {
    boxes.push(new Box(200, 20, random(6, 11)));
    background(bg);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    // ground5.display();
}

