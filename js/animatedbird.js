var Animation = function(frame_set, delay){
    this.count = 0;
    this.delay = delay;
    this.frame = 0;
    this.frame_index = 0;
    this.frame_set = frame_set;
};

Animation.prototype = {

    change:function(frame_set, delay= 15) {

        if (this.frame_set != frame_set){
            this.count = 0;

            this.frame_index = (this.frame_index == this.frame_set.length -1) ? 0 : this.frame_index + 1;
            this.frame = this.frame_set[this.frame_index];
        }
    }
};

var buffer, controller, display, loop, player, render, resize, sprite_sheet;

buffer = document.createElement("canvas").getContext("2d");
dispaly = document.querySelector("canvas").getContext("2d");


player = {
    animation: new Animation(),
    flyingUp:true,
    width: 200,     height: 139,
    x:0,            y:0,
    x_velocity:0,   y_velocity:0
};

sprite_sheet = {

    frame_sets:[[0, 1], [2, 3], [4, 5], [6, 7]],
    image:new Image()
};

loop = function(time_stamp){

    if(controller.up.active && !player.flyingUp){

        controller.up.active = false;
        player.flyingUp = true;
        player.y_velocity -= 2.5;
    }

    if (controller.down.active) {
        player.animation.change(sprite_sheet.frame_sets[])
    }
}