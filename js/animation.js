var Animation = function(frame_set, delay) {

    this.count = 0;
    this.delay = delay;
    this.frame = 0;
    this.frame_index = 0;
    this.frame_set = frame_set;

};

Animation.prototype = {
    change: function(frame_set, delay = 15) {
        
        if (this.frame_set != frame_set){

        }
    }

player = {
    animation:new Animation(),
    flying = true;
    
}
}