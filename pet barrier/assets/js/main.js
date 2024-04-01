
// .............................brand slidee JS

$(document).ready(function () {
  $('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    infinite: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});


// service slides

$(document).ready(function () {
  $('.service-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});


//   humburger active class

$(document).ready(function () {
  $('.humburger').click(function () {
    $(this).toggleClass('active');
    $("nav").toggleClass('show');
    $(".tel-dtl").toggleClass('show');
    $('body').toggleClass('overflow')
  });
});


$(document).ready(function () {
  $('nav').click(function () {
    $(this).toggleClass('show');
    $(".humburger").toggleClass('active');
    $(".tel-dtl").toggleClass('show');
    $('body').removeClass('overflow')
  });
});


// header sticky

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 100){  
//       $('.navigation-bar').addClass("sticky");
//       $('.hero').css("margin-top" , "114px");
//     }
//     else{
//       $('.navigation-bar').removeClass("sticky");
//       $('.hero').css("margin-top" , "0px");
//     }
//   });

// menu class active

$(document).ready(function () {
  $('ul li a').click(function () {
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
});


// scrollupp

$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrollup').addClass('show')
      } else {
        $('.scrollup').removeClass('show');
      }
    }); 
 
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  
});