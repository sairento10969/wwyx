$(document).ready(function(){
    // 导航栏
    $(".header_main_li").mouseenter(function(){
        $(this).children(".header_main_lidropdown").fadeIn()
    });
    $(".header_main_li").mouseleave(function(){
        $(this).children(".header_main_lidropdown").fadeOut()
    });

    //顶部广告图片宽度随适口随动
    // $(".topAD_picimg").width($(window).width());
    // $(window).resize(function(){
    //     $(".topAD_picimg").width($(window).width());
    //   })



    //登陆界面
    $(".js-topLogin").click(function(){
        $(".login_outer").fadeIn();
    });
    $(".login_close").click(function(){
        $(".login_outer").fadeOut();
    })

})