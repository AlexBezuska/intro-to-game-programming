var canvas = document.getElementById("canvas");
var game = new Splat.Game(canvas, {});

var gravity = 0.9;
var playerSpeed = 0.4;

game.scenes.add("main", new Splat.Scene(canvas, function() {
	// start

	this.player = new Splat.Entity(500, 300, 32, 64);

	this.player.draw = function(context){
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, 32, 64);
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

	this.player.move(time);

}, function(context) {
	// draw

	context.fillStyle = "green";
	context.fillRect(0, 0, canvas.width, canvas.height);

	this.player.draw(context);
	
}));

game.scenes.switchTo("main");