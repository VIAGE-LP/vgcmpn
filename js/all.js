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

    //偵測sns line btn 手機版還是電腦版，連結不同
    // var vw=$(window).width();
    // if (vw <= 768) {
    //     $(".line_link").attr("href", "https://bit.ly/2YszXqD");
    // } else {
    //     $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    // }
    
    //聊天機器人
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var formTop = $('#contact').position().top;
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