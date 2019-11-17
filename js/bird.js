$(document).ready(function() {
    //Set game constants
    const ctx = document.getElementById("myCanvas").getContext("2d");
    const spriteWidth = 200;
    const spriteHeight = 139;
    const numImages = 4;
    
    //Set canvas variables
    var canvasHeight = ctx.canvas.height;
    var canvasWidth = ctx.canvas.width;
    //Set Game Variables
    var score = 0;
    gameOver = false;
    var counter = 0;

   var birds = new Image();
   birds.src = 'img/birdspritesheet2.png';
   birds.onload = function(){
    $('#myCanvas').fadeIn("slow");
    ctx.fillRect(0, 0, ctx.canvasWidth, ctx.canvasHeight);   
    
    window.requestAnimationFrame(animate);
        
        function animate(){
            let frame = Math.floor(counter % numImages);
            ctx.drawImage(birds, frame * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth/5, spriteHeight/5);
            counter += .25;

            window.requestAnimationFrame(animate);
            
        }
    };




    
        
});