$(function(){
  // testimonial start
    $('.twin-bro').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900,
        prevArrow: ".prev",
        nextArrow: ".next",
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
  // testimonial end

  // brand-main start
      $('.brand-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            }
          },
          
          ],
          responsive: [
          {
            breakpoint: 992,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            }
          },
          
          ],
        });

  // brand-main end

  // nav scrolltop start

$(window).on('scroll',function(){

  var scrolling = $(this).scrollTop()
  if(scrolling > 50){
    $(".bottom2top").fadeIn(500)
  }else {
    $(".bottom2top").fadeOut(500)
  }

  if(scrolling > 50){
    $(".menu-bg").addClass("nav-bg")
  }else {
    $(".menu-bg").removeClass("nav-bg")
  }

})

// nav scrolltop end

// bottom2top start

$(".bottom2top").on('click',function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
});

// bottom2top end

// counter start

jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

// counter end

// wowjs start

new WOW().init();

// wowjs end

})