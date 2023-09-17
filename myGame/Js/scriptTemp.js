// Canvas Game -> JS

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const BG_COLOR = '#121212';
const PLAYER_SPEED = 10;
const BULLET_SPEED = 10;
const OBSTACLE_SPEED = 10

let spawnTime = Math.floor(Math.random()*1000 + 500);

let score = 0;
const scoreDiv = document.getElementById('score');
const highScoreDiv = document.getElementById('highscore-value');

const background = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

