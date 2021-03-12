$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    // 立即購買btn動態
    $('.offerbtn, .offerbtn_m').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });
    // 立即訂購btn動態
    $('.buybtn,a[href="#size"]').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });

    //聊天機器人
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var formTop = $('#lp_form').position().top;
        var width = $(window).width();

        if ((formTop > (scrollPos + windowHeight / 2)) && (width <= 768)) {
            $("#alert").attr({
                style: "display: none;"
            });
        } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width <= 768)) {
            $("#alert").attr({
                style: "display: block;"
            });
        } else if ((formTop > (scrollPos + windowHeight / 2)) && (width > 768)) {
            $("#alert").attr({
                style: "display: none;"
            });
        } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width > 768)) {
            $("#alert").attr({
                style: "display: block;"
            });
        } 
    });
});