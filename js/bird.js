$(document).ready(function() {
    //Set game constants
    const ctx = document.getElementById("myCanvas").getContext("2d");
    const spriteWidth = 556;
    const spriteHeight = 359;
    const numImages = 2;
    
    //Set canvas variables
    var canvasHeight = ctx.canvas.height;
    var canvasWidth = ctx.canvas.width;
    //Set Game Variables
    var score = 0;
    gameOver = false;
    var counter = 0;

   var birds = new Image();
   birds.src = 'img/sheet2.png';
   birds.onload = function(){
    $('#myCanvas').fadeIn("slow");
    ctx.fillStyle = 'aliceblue'; 
    ctx.fillRect(0, 0, ctx.canvasWidth, ctx.canvasHeight);   
    
    window.requestAnimationFrame(animate);
        
        function animate(){
            let frame = Math.floor(counter % numImages);
            ctx.drawImage(birds, frame * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth/2, spriteHeight/2);
            counter += .01;

            window.requestAnimationFrame(animate);
            
        }
    };
        
});