// Plan -> Classes for Asteroids, Bullets => Bullets come from SpaceShip

class Asteroids{
    constructor(height, width, side){
        // const obstacleImage = new Image()
        // obstacleImage.src = null // REPLACE THIS WITH IMAGE PATH
        this.height = height
        this.width = width
        this.side = side
        this.asteroids = []
        this.speed = OBSTACLE_SPEED
    }

    generate() {
        rand_x = Math.floor(Math.random() * (canvas.width)) + 10
        this.asteroids.push([
            this.height,
            this.side,
            this.rand_x,
            false 
        ])
    }

    draw(){
        for(const i of this.asteroids){
            if(i[0] <= 0 ){
                continue;
            }
            ctx.fillStyle = '#0000FF'
            ctx.fillRect(this.width, this.height, this.side, this.side)
        }
    }

    update(){
        for(const i of this.asteroids){
            // update asteroid
            i[0] -= this.speed
            if (i[0] <= 0){
                const index = this.asteroids.indexOf(i);
                if (index !== -1) {
                this.asteroids.splice(index, 1);
                }
            }
        }
    }

    // if bullet hits the asteroid
    checkDestroyed(){
        for(const i of this.asteroids){
            if(i[0] <= 0){
                return true
            }
        }
    }
}

class Bullet{
    constructor(x, y){
        this.x = x
        this.y = y
        this.speed = BULLET_SPEED
        this.width = 5
        this.height = 10
        this.color = '#FF0000'
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.y -= this.speed
    }

    isOutOfCanvas(){
        if(this.y <= 0){
            return true
        }
    }
}

class Spaceship {
    constructor() {
        this.x = canvas.width / 2
        this.y = 50
        this.width = 50 
        this.height = 30 
        this.speed = PLAYER_SPEED 
        this.color = "#00FF00"
        this.isMovingLeft = false 
        this.isMovingRight = false 
    }

    moveLeft() {
        this.isMovingLeft = true;
        this.isMovingRight = false;
    }

    moveRight() {
        this.isMovingLeft = false;
        this.isMovingRight = true;
    }

    stop() {
        this.isMovingLeft = false;
        this.isMovingRight = false;
    }

    // Handle User Input
    handleInput() {
        if (this.isMovingLeft) {
            this.x -= this.speed;
        } else if (this.isMovingRight) {
            this.x += this.speed;
        }

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    shoot() {
        const bulletX = this.x + this.width / 2;
        const bulletY = this.y;
        return new Bullet(bulletX, bulletY);
    }
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const BG_COLOR = '#121212'
const PLAYER_SPEED = 2;
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

function gameloop(){

}

