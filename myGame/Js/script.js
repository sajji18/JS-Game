// --------------------------------------------------------------------------------------------------------

class Asteroids{
    constructor(height, width, side){
        this.height = height
        this.width = width
        this.side = side
        this.asteroids = []
        this.speed = OBSTACLE_SPEED
        this.obstacleImage = new Image()
        this.obstacleImage.src = 'Assets/invader.png' 
    }
    generate() {
        let rand_x = Math.floor(Math.random() * (canvas.width)) + 10
        this.asteroids.push([
            this.height,
            this.side,
            rand_x,
            false 
        ])
    }
    draw(){
        for(const i of this.asteroids){
            if(i[0] <= 0 ){
                continue;
            }
            ctx.drawImage(this.obstacleImage, 
                this.width, 
                this.height, 
                this.side, 
                this.side
                )
        }
    }
    update(){
        for(const i of this.asteroids){
            i[0] -= this.speed
            if (i[0] <= 0){
                const index = this.asteroids.indexOf(i);
                if (index !== -1) {
                this.asteroids.splice(index, 1);
                }
            }
        }
    }
    checkDestroyed(){
        return null
    }
}

class Bullet{
    constructor(){
        this.x = Spaceship.x
        this.y = Spaceship.y
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
        return null
    }
}

class Spaceship {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 50 
        this.height = 30 
        this.speed = PLAYER_SPEED 
        this.isMovingLeft = false 
        this.isMovingRight = false 
        this.spaceShipImage = new Image()
        this.spaceShipImage.src = 'Assets/spaceship.png'
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
        ctx.drawImage(this.spaceShipImage, 
            this.x, 
            this.y, 
            this.width, 
            this.height
            );
    }

    shoot() {
        const bulletX = this.x + this.width / 2;
        const bulletY = this.y;
        return new Bullet(bulletX, bulletY);
    }
}

// --------------------------------------------------------------------------------------------------------

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const PLAYER_SPEED = 2;
const BULLET_SPEED = 10;
const OBSTACLE_SPEED = 5
let asteroids = []
let bullets = []
let spaceships = []
let spaceship = new Spaceship(canvas.width / 2, canvas.height - 50)

let spawnTime = Math.floor(Math.random()*1000 + 500);

let score = 0;
const scoreDiv = document.getElementById('score');
const highScoreDiv = document.getElementById('highscore-value');

const backgroundImage = new Image();
const spaceShipImage = new Image();
const asteroidImage = new Image();

backgroundImage.src = 'Assets/startScreenBackground.png';
spaceShipImage.src = 'Assets/spaceship.png';
asteroidImage.src = 'Assets/invader.png';

// Ensure all images are loaded before starting the game
backgroundImage.onload = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};


function gameloop() {
    let rand_x = Math.floor(Math.random() * (canvas.width)) + 10;
    const side = 30

    const newAsteroid = new Asteroids(0, rand_x, side);
    newAsteroid.generate();
    asteroids.push(newAsteroid);
    newAsteroid.draw();

    const newBullet = spaceship.shoot();
    bullets.push(newBullet);
    newBullet.draw();

    // Update and draw existing asteroids
    asteroids.forEach((asteroid) => {
        asteroid.update();
        asteroid.draw();
    });

    // Update and draw existing bullets
    bullets.forEach((bullet) => {
        bullet.update();
        bullet.draw();
        if (bullet.isOutOfCanvas()) {
            const index = bullets.indexOf(bullet);
            if (index !== -1) {
                bullets.splice(index, 1); 
            }
        }
    });

    // Update spaceship position and handle user input
    spaceship.draw(spaceship.x, spaceship.y);

    // Collision Between Bullet and Asteroid
    for (const bullet of bullets) {
        for (const asteroid of asteroids) {
            if (
                bullet.x + bullet.width >= asteroid[2] &&
                bullet.x <= asteroid[2] + asteroid[1] &&
                bullet.y <= asteroid[0] + asteroid[1]
            ) {
                score++;
                const bulletIndex = bullets.indexOf(bullet);
                if (bulletIndex !== -1) {
                    bullets.splice(bulletIndex, 1);
                }
                const asteroidIndex = asteroids.indexOf(asteroid);
                if (asteroidIndex !== -1) {
                    asteroids.splice(asteroidIndex, 1);
                }
            }
        }
    }

    scoreDiv.textContent = score;
    requestAnimationFrame(gameloop);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        spaceship.moveLeft();
        spaceship.x -= 10
    } else if (e.key === "ArrowRight") {
        spaceship.moveRight();
        spaceship.x += 10
    } else if (e.key === " ") {
        const bullet = spaceship.shoot();
        bullets.push(bullet);
    }
});

gameloop()

// --------------------------------------------------------------------------------------------------------
