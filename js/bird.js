$(document).ready(function() {
    //Set game constants
    const ctx = document.getElementById("myCanvas").getContext("2d");
    const spriteWidth = 200;
    const spriteHeight = 139;

    //Create image for the sprite sheet & set the source
    //Event listener ensures that image has loaded or it can't be drawn
    var birdSprites = new Image();
    birdSprites.addEventListener('load', function(){
        loadStartMenu();
    }, false);
    birdSprites.src = 'img/birdspritesheet2.png';

    
    //Create variable for the bird & it's css properties (height/width)
    //should be able to delete with canvas, also delete from css
    var bird = $('#bird');
    var birdHeight = bird.css("height");
    var birdWidth = bird.css("width");

    //Number of bird images on the sprite sheet
    var numImages = 4;
    var cont = 0;

    //var animation = setInterval(moveSprite, 100);
    
    //Set Game Variables
    var score = 0;

    function loadStartMenu(){
        $('#myCanvas').fadeIn("slow");
        draw();
    }

    function draw(){


        //draw 1st bird from sprite sheet and scale it down
        ctx.drawImage(birdSprites, 0, 0, spriteWidth, spriteHeight, 20, 20, spriteWidth/4.5, spriteHeight/4.5);
        ctx.fillStyle = "red";
        ctx.font = "italic bold 20px 'Passion One', sans-serif";
        ctx.fillText(score, ctx.canvas.width/2, 20, 30);
        ctx.textAlign = 'start'; 
        ctx.textBaseline = 'top';

    }

    function moveSprite(){
        img.css('margin-top', -1 * (cont * imgHeight));
        cont++;
        if (cont == numImages){
            clearInterval(animation);
        }
    }
        
});

