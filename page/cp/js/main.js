$(document).ready(function () {


    // 导航栏
    $(".header_main_li").mouseenter(function () {
        $(this).children(".header_main_lidropdown").fadeIn()
    });
    $(".header_main_li").mouseleave(function () {
        $(this).children(".header_main_lidropdown").fadeOut()
    });

    //顶部广告图片宽度随适口随动
    // $(".topAD_picimg").width($(window).width());
    // $(window).resize(function(){
    //     $(".topAD_picimg").width($(window).width());
    //   })

    //底部图标hover换色
    $(".footer_top_itemA").mouseenter(function () {
        $(this).children(".footer_top_text").css("color", "#b4a078");
    });
    $(".footer_top_itemA").mouseleave(function () {
        $(this).children(".footer_top_text").css("color", "#333");
    });
    $(".footer_top_itemA1").mouseenter(function () {
        $(this).children(".footer_top_icon").css("background-position", "0 -196px");
    });
    $(".footer_top_itemA1").mouseleave(function () {
        $(this).children(".footer_top_icon").css("background-position", "0 -232px");
    });
    $(".footer_top_itemA2").mouseenter(function () {
        $(this).children(".footer_top_icon").css("background-position", "0 -61px");
    });
    $(".footer_top_itemA2").mouseleave(function () {
        $(this).children(".footer_top_icon").css("background-position", "0 -98px");
    });


    //登陆界面
    $(".js-topLogin").click(function () {
        $(".login_outer").fadeIn();
    });
    $(".login_close").click(function () {
        $(".login_outer").fadeOut();
    });
    $(".login_mask").click(function () {
        $(".login_outer").fadeOut();
    })


    //底部浮动关闭
    $(".fixedbottom_close").click(function () {
        $(".fixedbottom").fadeOut();
    });

    //顶部浮动框显示
    $(window).scroll(function () {
        var scrollH = jQuery(window).scrollTop();
        // console.log(scrollH)
        if (scrollH <= 190) {
            $(".fixedHeader").fadeOut(200);
        }
        if (scrollH > 190) {
            $(".fixedHeader").fadeIn(200);
        }
    });
    



})


//主体顶部长广告轮播
var i, m, n, timeA, timeB, timeC;
i = 1;
$(function () {
    a();
    //鼠标移上后暂停
    $(".main_topAD").mouseenter(function () {
        clear();
    });
    //鼠标移出后开始
    $(".main_topAD").mouseleave(function () {
        timeB = setTimeout("a()", 1000);
    });
    //左按钮
    $(".buttonl").click(function () {
        clear();
        if (i >= 3) {
            i = i - 2;
        } else if (i = 2) {
            i = 8;
        } else {
            i = 7;
        }
        a();
    })
    //右按钮
    $(".buttonr").click(function () {
        clear();
        $(".topAD_pic").css("z-index", "7");
        $(".topAD_pic").css("opacity", "0");
        $(".topAD_pic" + i).css("z-index", "8");
        $(".topAD_pic" + i).css("opacity", "1");
        if (i <= 7) {
            i++
        } else {
            i = 1;
        }
        timeA = setTimeout("a()", 3000);
    })
    //点击圆点按钮
    $(".topAD_dots li").click(function(){
        clear();
        m = $(this).index();
        i = m +1;
        timeC = setTimeout("a()");
    })
})
//轮播效果
function a() {
    clear();
    if (i <= 8) {
        $(".topAD_pic").css("z-index", "7");
        $(".topAD_pic").css("opacity", "0");
        $(".topAD_pic" + i).css("z-index", "8");
        $(".topAD_pic" + i).css("opacity", "1");
        $(".topAD_dots li").removeClass("topAD_dots_active");
        $(".topAD_dots"+i).addClass("topAD_dots_active");
        i++;
        timeA = setTimeout("a()", 3000);
    } else {
        i = 1;
        timeC = setTimeout("a()");
    }
};
//清除计时器
function clear() {
    clearTimeout(timeA);
    clearTimeout(timeB);
    clearTimeout(timeC);
}