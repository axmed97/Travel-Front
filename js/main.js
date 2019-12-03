"use stric"

$(document).ready(function(){
    $(".basket").click (function(){
        $(".inbasket").toggleClass("show-basket");
    });
    $(".eur").click (function(){
        $(".drop-ul").toggleClass("show-money");
    });
    $(".acc-menu").hide();
    $(".slide-btn").click(function(){
        $(this).next().slideToggle();
    });
    $(".side-icon").click(function(){
        $(".side-menu").addClass("active-side-menu")
    });
    $(".back-li").click(function(){
        $(".side-menu").removeClass("active-side-menu")
    });
    $('.slide-slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $(".click-span").click(function(){
        $(".span-menu").toggleClass("d-block");
    });
    $("input").click(function(){
        $(this).toggleClass("active-input")
    });
    $(".foot-click").click(function(){
        $(".foot-menu").toggleClass("d-block")
    });
})