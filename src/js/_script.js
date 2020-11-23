$(function(){
    $('.carousel__inner').slick({
        speed : 1000,
        adaptiveHeight: true,
        prevArrow : '<button type="button" class="slick-prev"><img src="icons/arrows/prev.png"></button>',
        nextArrow : '<button type="button" class="slick-next"><img src="icons/arrows/next.png"></button>',
        responsive: [
            {
              breakpoint: 993,
              settings: {
                  dots: true,
                  arrows: false
              }
            }
          ]
    });
  });