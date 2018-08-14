$(document).ready(function(){
    // 导航栏
    $(".header_main_li").mouseenter(function(){
        $(this).children(".header_main_lidropdown").fadeIn()
    });
    $(".header_main_li").mouseleave(function(){
        $(this).children(".header_main_lidropdown").fadeOut()
    });

    //新品首发图片替换

})