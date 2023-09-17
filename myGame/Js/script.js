// Canvas Game -> JS

document.addEventListener("DOMContentLoaded", function () {
    // Start Game
    function startGame() {
        myGameArea.start();
        myGamePiece = new component(50, 50, "red", canvas.width / 2, canvas.height / 2)
    }

    // GameArea object
    var myGameArea = {
        canvas : document.getElementById("canvas"),
        start : function() {
            this.context = this.canvas.getContext("2d");
        }
    }

    function component(width, height, color, x, y){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    startGame();
});

