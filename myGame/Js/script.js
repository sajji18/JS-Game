// Plan -> Classes for Asteroids, Bullets => Bullets come from SpaceShip

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const BG_COLOR = '#121212';
const PLAYER_SPEED = 1;
const BULLET_SPEED = 10;
const OBSTACLE_SPEED = 5

let spawnTime = Math.floor(Math.random()*1000 + 500);

let score = 0;
const scoreDiv = document.getElementById('score');
const highScoreDiv = document.getElementById('highscore-value');

const background = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

class Obstacles{
    constructor(height, width, side){
        const obstacleImage = new Image()
        obstacleImage.src = null // REPLACE THIS WITH IMAGE PATH
        this.height = height
        this.width = width
        this.side = side
        this.obstacles = []
        this.speed = 20
        this.genTime = 1.2
        this.genTimeScore = 2000
        this.score = 0
    }

    // create obstacle function
    generate(this) {
        randomYCoordinate = Math.floor(Math.random() * (canvas.width)) + 10;
        obstacles.push([
            this.width,
            this.side,
            this.randomYCoordinate,
            false
        ])
    }

    // render obstacle on canvas
    draw(this){
        for(let obstacle=0; obstacle <= obstacles; obstacle++){
            if(obstacle[0] <=0 ){
                continue;
            }
            // WRITE THE DRAWING CODE
            
        }
    }

    // move the asteroid from right to left
    update(this){
        for(let obstacle=0; obstacle <= obstacles; obstacle++){
            obstacle[0] -= this.speed
            if (obstacle[0] <= 0){
                const index = obstacles.indexOf(obstacle);
                if (index !== -1) {
                obstacles.splice(index, 1);
                }
            }
        }
    }

    // if bullet hits the asteroid
    checkDestroyed(this){

    }
}

class Bullet{
    constructor(){
        
    }

    generate(){

    }

    draw(){

    }

    update(){

    }

    checkDestroyed(){

    }
}