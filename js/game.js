$(document).ready(function() {
    //Variables for the game dom objects
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var gameControls = $('#gameControls');
    var score_span = $('#score');
    var speed_span = $('#speed');
    var restart_button = $('#restart_btn');
    var play_btn = $('#play_btn');
    var stats = $('#stats');


    //Variables for the initial set up    
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;
    var score = 0;

    //other variables
    var go_up = false;
    var score_updated = false;
    var game_stopped = true;
    var endText = "";
    var displayStats = false;
    
    play_btn.click(function() {
        game_stopped = false;
        play_btn.css("display", "none");
        playGame();
    });
    
    function playGame(){
        toggleStats(); 
        var the_game = setInterval(function() {

        if(collision(bird, pole_1) || collision(bird, pole_2) || parseInt(bird.css('top')) <= 0 || parseInt(bird.css('top')) >= container_height - bird_height){
            stopGame();

        } else {

            var pole_current_position = parseInt(pole.css('right'));

            //check if bird makes it through poles
            if(pole_current_position > container_width - bird_left){
                if (!score_updated){
                    score += 1;
                    score_span.text(score);
                    score_updated = true;
                }   
            }

            //check if the poles went out of the container
            if (pole_current_position > container_width){
                var new_height = parseInt(Math.random() * 100);

                //change the height before allowing pole to reappear
                pole_1.css('height', pole_initial_height + new_height);
                pole_2.css('height', pole_initial_height - new_height);

                //increase speed
                speed += 1;
                speed_span.text(speed);  

                //reset scoring & pole positions
                score_updated = false;
                pole_current_position = pole_initial_position;
            }

            //move the pole to the right
            pole.css('right', pole_current_position + speed);

            if (!go_up){
                go_down();
            }
        }

    }, 40);

    function stopGame(){
        game_stopped = true;
        clearInterval(the_game);
        restart_button.css("display", "inline-block");
        var endText = $(newDiv()).text("Game Over! You went through " + score + " pipes. Click the restart button to try again");
        $(gameControls).append(endText);
        $(gameControls).css("flex-direction", "column-reverse");
        toggleStats();

        function newDiv() {
            return "<div class='gameOver'></div>";
        }
    }

    restart_button.click(function() {
        $(endText).remove();
        toggleStats();
        location.reload();
        playGame();
    });

    //if the score & speed are hidden then show, otherwise hide.  
    function toggleStats(){
        if (!displayStats){
            $(stats).css("display", "flex");
            displayStats = true;
        }
        else {
            $(stats).css("display", "none");
            displayStats = false;
        }
    }

    //if space key is pressed when the game is not stopped
    $(document).on('keydown', function(e){
        var key = e.keyCode;
        if (key === 32 && !go_up && !game_stopped) {
            go_up = setInterval(up, 50);
        }
    });

    $(document).on('keyup', function(e){
        var key = e.keyCode;
        if (key === 32) {
            clearInterval(go_up)
            go_up = false;
        }
    });


    //for mobile devices
    $('body').bind( "touchstart", function(e){
        if (!go_up && !game_stopped) {
            go_up = setInterval(up, 65);
        }
    });

    $('body').bind( "touchend", function(e){
	 clearInterval(go_up)
         go_up = false;
    });


    //if mouse is clicked when game is not stopped
    $(document).mousedown(function(){
        if (!go_up && !game_stopped) {
            go_up = setInterval(up, 50);
        }
    });

    $(document).mouseup(function(){
            clearInterval(go_up)
            go_up = false;
    });


    function go_down(){
        bird.css('top', parseInt(bird.css('top')) + 5);
    }

    function up(){
        bird.css('top', parseInt(bird.css('top')) -5);
    }

    function collision($div1, $div2){
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
}


});