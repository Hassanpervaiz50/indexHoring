$(function () {
    $('[data-toggle="tooltip"]').tooltip()
}); 
$( document ).ready(function() {
    $(".burger-icon").click(function(){
        $(this).toggleClass("active");
        $(".side-menu ").toggleClass("active col-2 col-auto");
        $(".sec-show").toggleClass("col-10 col");

    });

 
});