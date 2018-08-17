//商品页面专用JS
$(document).ready(function () {
    //商品信息图片点击高亮
    $(".info_bottom_pic").click(function () {
        if($(this).hasClass("info_bottom_pic_active")){
            $(this).removeClass("info_bottom_pic_active");
        }else{
            $(".info_bottom_pic").removeClass("info_bottom_pic_active");
            $(this).addClass("info_bottom_pic_active")   ;         
        }
    });
})