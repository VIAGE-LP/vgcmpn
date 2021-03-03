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
    var vw=$(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://bit.ly/2YszXqD");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }
    
    //週年慶活動辦法下拉選單
    // $(".anniversary_2 img,.anniversary_2, .SP_anniversary_2 img,.SP_anniversary_2").hide();
    // $('.anniversary_1, .SP_anniversary_1').click(function (e) { 
    //     e.preventDefault();
    //     $(".anniversary_2 img,.anniversary_2, .SP_anniversary_2 img,.SP_anniversary_2").attr("style","display:block;");
    // });
    // $('.anniversary_2, .SP_anniversary_2').click(function (e) { 
    //     e.preventDefault();
    //     $(".anniversary_2 img,.anniversary_2, .SP_anniversary_2 img,.SP_anniversary_2").hide();
    // });
});