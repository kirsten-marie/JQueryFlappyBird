$(document).ready(function() {
    //Set game constants
    const ctx = document.getElementById("myCanvas").getContext("2d");
    const spriteWidth = 200;
    const spriteHeight = 139;

    //Set canvas variables
    var canvasHeight = ctx.canvas.height;
    var canvasWidth = ctx.canvas.width;
    //Set Game Variables
    var score = 0;
    gameOver = false;

    /*
    //Create image for the sprite sheet & set the source
    //Event listener ensures that image has loaded or it can't be drawn
    var birdSprites = new Image();
    birdSprites.addEventListener('load', function(){
        loadStartMenu();
    }, false);
    birdSprites.src = 'img/birdspritesheet.png';

    //Create variable for the bird & it's css properties (height/width)
    //should be able to delete with canvas, also delete from css
    var bird = $('#bird');
    var birdHeight = bird.css("height");
    var birdWidth = bird.css("width");
    */

   var birdSprites = new Image();
   birdSprites.src = 'img/birdspritesheet.png';
   birdSprites.onload = function(){
        startAnimation();
   };
    
   function startAnimation(){
       ctx.fillStyle = 'aliceblue';
       ctx.fillRect(0, 0, ctx.canvasWidth, ctx.canvasHeight);
       let sourceX = 200,
       sourceY = 0,
       sourceWidth = spriteWidth,
       sourceHeight = spriteHeight,
       destX = 50,
       destY = 50,
       destWidth = spriteWidth/3,
       destHeight = spriteHeight/3;
       ctx.drawImage(birdSprites, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
   }

    //Number of bird images on the sprite sheet
    var numImages = 4;
    var cont = 0;
    
    var id = setInterval(frame, 5);
    
    function frame(){
        if (!gameOver){
            clearInterval(id);
        }
        else{
            //animation code
        }
    }

    function loadStartMenu(){
        $('#myCanvas').fadeIn("slow");
        draw();
    }


    function draw(){

        
        //draw 1st bird from sprite sheet and scale it down
        ctx.drawImage(birdSprites, 0, 0, spriteWidth, spriteHeight, 20, 20, spriteWidth/4.5, spriteHeight/4.5);
        ctx.fillStyle = "black";
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText(score, ctx.canvas.width/2, 20);
        ctx.textAlign = 'start'; 
        ctx.textBaseline = 'top';
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        
/*
        ctx.fillStyle = "purple";
        ctx.fillRect(70, 20, 45, 40);

        var rectX = ctx.canvas.width;
        
        //testing out composite assets

        ctx.globalAlpha = 1.0;
        ctx.globalCompositeOperation = 'source-atop';
        //source-atop || source-in || source-out || source-over (default) || destination-atop || destination-in || destination-out || destination-over || lighter || copy || xor

        ctx.fillStyle = "orange";
        ctx.fillRect(100, 40, 50, 50);
        */
    }
        
});