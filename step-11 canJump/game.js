var canvas = document.getElementById("canvas");
var game = new Splat.Game(canvas, {});

var gravity = 0.1;
var playerSpeed = 0.4;
var jumpSpeed = 1.5;
var canJump = false;

game.scenes.add("main", new Splat.Scene(canvas, function() {
  // start

  this.player = new Splat.Entity(500, 300, 32, 64);
  
  this.player.draw = function(context){
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  
  this.platform = new Splat.Entity(300, 600, 600, 32);
  this.platform.draw = function(context){
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  
  this.platform2 = new Splat.Entity(20, 450, 400, 32);
  this.platform2.draw = function(context){
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  
  this.platform3 = new Splat.Entity(500, 350, 200, 32);
  this.platform3.draw = function(context){
    context.fillStyle = "black";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  
}, function(time) {
  // run
  
  this.player.vx = 0;
  this.player.vy += gravity;
  
  if (game.keyboard.isPressed("d")){
    this.player.vx = playerSpeed;
  }
  if (game.keyboard.isPressed("a")){
    this.player.vx = -playerSpeed;
  }
  if (game.keyboard.isPressed("space") && canJump == true){
    this.player.vy = -jumpSpeed;
    canJump = false;
  }
  
  
  this.player.move(time);  
  if(this.player.solveCollisions([this.platform]).length > 0){
    canJump = true;
  }
  if(this.player.solveCollisions([this.platform2]).length > 0){
    canJump = true;
  }
  if(this.player.solveCollisions([this.platform3]).length > 0){
    canJump = true;
  }
  
}, function(context) {
  // draw
  
  context.fillStyle = "green";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  this.platform.draw(context);
  this.platform2.draw(context);
  this.platform3.draw(context);
  this.player.draw(context);
  
}));

game.scenes.switchTo("main");
