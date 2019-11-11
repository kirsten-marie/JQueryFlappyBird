//Constants
var MAX_LIVES = 3;
var MIN_ENEMIES = 10;
var MIN_ENEMY_RADIUS = 10;
var MAX_ENEMY_RADIUS = 30;
var SPEED = 5;
var ENEMY_POPULATE_RATE = 5;
var PLAYER_SPEED = 3;
var TIME_BETWEEN_ENEMIES = 1000;

//Global Variables
var lives = MAX_LIVES;
var canvas;
var context;
var enemies = new Array();
var avatar;
var score = 0;
var gamePaused = false;
var timer = 0;

//doStartup- Get canvas and begin animation

function doStartup() {
    avatar = createAvatar();
}