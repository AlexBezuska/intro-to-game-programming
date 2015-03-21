var canvas = document.getElementById("canvas");
var game = new Splat.Game(canvas, {});

game.scenes.add("main", new Splat.Scene(canvas, function() {
  // start
  
  this.player = new Splat.Entity(250,250, 32, 64);
  
  this.player.draw = function(context){
    context.fillStyle = "white";
    context.fillRect(this.x,this.y,32,64);
  }
  
}, function(time) {
  // run 

}, function(context) {
  // draw
  
  context.fillStyle = "green";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  this.player.draw(context);

}));

game.scenes.switchTo("main");