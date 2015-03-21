var canvas = document.getElementById("canvas");
var game = new Splat.Game(canvas, {});

game.scenes.add("main", new Splat.Scene(canvas, function() {
	// start

}, function() {
	// run

}, function(context) {
	// draw

	context.fillStyle = "green";
	context.fillRect(0, 0, canvas.width, canvas.height);

}));

game.scenes.switchTo("main");