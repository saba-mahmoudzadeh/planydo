$(".d").hover(function() {
 $(".personal").show();   
});
var d = document.getElementsByClassName(".d");
var personal = document.getElementsByClassName(".personal");
$(".d").hover(function () {
    $(".personel").css("opacity","1");},
    function () {
        $(".personel").css("opacity","0");
        
    }
    
);