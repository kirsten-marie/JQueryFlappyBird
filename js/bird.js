$(document).ready(function() {
    //constants
    const ctx = document.getElementById("myCanvas").getContext("2d");
    
    var birdSprites = new Image();
    birdSprites.addEventListener('load', function(){
        loadStartMenu();
    }, false);
    birdSprites.src = 'img/birdspritesheet2.png';

    var spriteHeight = 139;
    var spriteWidth = 200;

    
    //Create variable for the bird & it's css properties (height/width)
    var bird = $('#bird');
    var birdHeight = bird.css("height");
    var birdWidth = bird.css("width");
    


    //Number of bird images on the sprite sheet
    var numImages = 4;
    var cont = 0;

    //var animation = setInterval(moveSprite, 100);
    
    

    function loadStartMenu(){
        $('#myContainer').fadeIn("slow");
        draw();
    }

    function draw(){

        ctx.drawImage(birdSprites, 20, 20);

    }

    function moveSprite(){
        img.css('margin-top', -1 * (cont * imgHeight));
        cont++;
        if (cont == numImages){
            clearInterval(animation);
        }
    }
        
});

