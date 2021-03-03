let html = '';

user_data.forEach(function ({ name, text }, index) {
  html += `
            <div>
              <a href="#" class="ig_box" data-toggle="modal" data-target="#exampleModalLong" data-index="${index}">
                <div class="ig_name">
                  <span><img src="img/ig/ig_img${index + 1}.jpg"/></span>${name}
                </div>
                <img src="img/ig/ig_img${index + 1}.jpg" alt="" class="ig_img ${name}" id="${name}"/>
                <p class="ig_text">
                  ${text}
                </p>
                <div class="btn_more">完整心得</div>
                <div class="icon_heart"></div>
                <div class="btn_more_love"></div>
                <div class="btn_more_line"></div>
              </a>
            </div>
    `
});
document.querySelector('.ig_slider').innerHTML = html;

$(".ig_slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        dots: true,
        arrows: true,
      }
    },
  ]
});

//ig modal 當按下“立即購買”按鈕
$(".igbuy_btn").click(function () {
  $("#exampleModalLong").attr("style", "display:none").removeClass("show").removeAttr("aria-modal").attr("aria-hidden", "true");
  $("body").removeClass("modal-open");
  $(".modal-backdrop").remove();
});

// $('.modal_name').html("33l33l")
// $('.modal_text').html("有特殊立體弧線防止胸部下垂外擴腋下也有加高設計可以遮蔽副乳～重點是完全不會有不舒服的壓肩感也不會空杯跑位")

$(".ig_box").click(function () {
  var modal_image = '';
  var modal_name = '';
  var modal_text = '';
  var modal_index = '';
  var modal_hashtag = '';
  var buyid = "";

  modal_index = $(this).attr("data-index");
  modal_image = $(this).find('img').attr("src");
  modal_name = $(this).find('.ig_name').text();
  modal_text = user_data[modal_index].modal_text;
  modal_hashtag = user_data[modal_index].hashtag;
  buyid = user_data[modal_index].buyid;
  $('.modal_image').html(`<img src="${modal_image}" class="modal_img_style mx-auto d-block" alt="">`);
  $('.modal_face').html(`<img class="mr-3" src="${modal_image}" style="width: 64px; height:64px; border-radius:50%; border: solid rgb(0,0,0,0.2) 0.5px" alt="Generic placeholder image">`);
  $('.modal_name').html(modal_name);
  $('.modal_text').html(modal_text);
  $('.modal_hashtag').html(modal_hashtag);
  $(".modal_body a").attr("disabled", true);
  $(".igbuy_btn").attr("id", buyid);
});
