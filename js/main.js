$(document).ready(function(){
    $(".header_main_li").mouseenter(function(){
        $(this).children(".header_main_lidropdown").fadeIn()
    });
    $(".header_main_li").mouseleave(function(){
        $(this).children(".header_main_lidropdown").fadeOut()
    });
})