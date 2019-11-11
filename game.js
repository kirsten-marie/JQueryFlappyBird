$(document).ready(function() {
    //Variables for the game dom objects
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_button = $('#restart_btn');
    var play_pause = $('#play_btn');

    //Variables for the initial set up    
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;

    //other declarations
    var go_up = false;


    var the_game = setInterval(function() {

        if(collision(bird, pole_1) || collision(bird, pole_2)){
            stopGame();

        } else {

            var pole_current_position = parseInt(pole.css('right'));

            //check if the poles went out of the container
            if (pole_current_position > container_width){
                var new_height = parseInt(Math.random() * 100);

                //change the height before allowing pole to reappear
                pole_1.css('height', pole_initial_height + new_height);
                pole_2.css('height', pole_initial_height - new_height);

                //increase speed
                speed += 1;
                speed_span.text(speed);

                //set back to original position
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
        clearInterval(the_game);
        restart_button.css("display", "inline-block");
    }

    $(document).on('keydown', function(e){
        var key = e.keyCode;
        if (key === 32 && !go_up) {
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

});