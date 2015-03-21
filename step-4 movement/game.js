var canvas = document.getElementById("canvas");
var game = new Splat.Game(canvas, {});

game.scenes.add("main", new Splat.Scene(canvas, function() {
  // start
  this.player = new Splat.Entity(500, 300, 32, 64);
   
  this.player.draw = function(context){
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, 32, 64);
  }
  
}, function(time) {
  // run
  
  this.player.vx = 0.4;
  this.player.move(time);
  
}, function(context) {
  // draw
  
  context.fillStyle = "green";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
   this.player.draw(context);
  
}));

game.scenes.switchTo("main");