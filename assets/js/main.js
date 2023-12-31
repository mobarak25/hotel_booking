/*global jQuery */
(function ($) {
  "use strict";

  $(window).on("load", function () {
    $(".main-nav").load("menu.html");
  });
  
  $(function(){
      $(".main-nav").load("menu.html"); 
    });

  $(".main-nav-list > li").hover(
    function () {
      $(this).addClass("down");
      $(this).children("ul").stop(true, true).slideDown("slow");
    },
    function () {
      $(this).removeClass("down");
      $(this).children("ul").slideUp("fast");
    }
  );

  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "linear", // the easing function for animation
    scrollTime: 300, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: 0, // offste (in px) for fixed top navigation
  });

  $(".properties-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
  });

  $(".hospitality ul").slick({
    slidesToShow: 3,
    slidesToScroll: 1,

    dots: false,
    focusOnSelect: true,
  });
})(jQuery);

$(window).on("load", function () {
  new AnimOnScroll(document.getElementById("grid"), {
    minDuration: 0.4,
    maxDuration: 0.7,
    viewportFactor: 0.2,
  });
});

//-----JS for Price Range slider-----
