$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("button").css("color", "purple");
});


$(document).keypress(function(event){
    $("h1").text(event.key);
}) 