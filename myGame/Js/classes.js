// Plan -> Classes for Asteroids, Bullets => Bullets come from SpaceShip

class Asteroid{
    constructor(height, width, side){
        this.height = height
        this.width = width
        this.side = side
        this.obstacles = []
        this.speed = 20
        this.genTime = 1.2
        this.genTimeScore = 2000
        this.score = 0
    }

    // create asteroid function
    generate(this) {
        
    }

    // render asteroid on canvas
    drawObstacle(this){

    }

    // move the asteroid from right to left
    update(this){

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

    drawBullet(){

    }

    update(){

    }

    checkDestroyed(){

    }
}