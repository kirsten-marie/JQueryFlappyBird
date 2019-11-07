$(document).ready(function() {
    $("#hidden").hover(function(){
        $(this).css("color", "black");
    },
    function(){
        $(this).hide();
    });

    $("button").click(function() {
        alert("I am alerting you");
    });
});