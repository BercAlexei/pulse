$(function () {
  // add slider
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/next.png"></button>',
    responsive: [{
      breakpoint: 993,
      settings: {
        dots: true,
        arrows: false,
        adaptiveHeight: false
      }
    }]
  });

  // add tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  // add link to tab
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // add modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thamks').fadeOut('slow');
  });
  $('.button_mini').on('click', function(){
    $('.overlay, #order').fadeIn('slow');
  });
  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    });
  });

  $('.feed-form').validate();

});