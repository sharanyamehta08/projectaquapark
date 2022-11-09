var backgroundImage;
var gameState= "start"
var font
var startImage
var penguin1 
var penguin2
var form,game, player, gameState, playerCount
var database

function preload() {
  backgroundImage= loadImage("images/background.jpg");
  font= loadFont("farenheight-font/font.ttf");
  startImage = loadImage("images/startImage.jpg");
  penguin1Image = loadImage("images/penguin1.jpg");
  penguin2Image = loadImage("images/penguin2.jpg");
  penguin3Image = loadImage("images/penguin3.jpg");
  penguin4Image = loadImage("images/penguin4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  gameState = 0
  playerCount = 0
  game = new Game(); 
  game.getState(); 
  game.start(); 
}

function draw() {
  background(backgroundImage);
  if (playerCount== 2){
    game.update(1)
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}