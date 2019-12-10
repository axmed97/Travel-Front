"use strict"

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
    $("input").click(function(){
        $(this).toggleClass("active-input")
    });
    $(".foot-click").click(function(){
        $(".foot-menu").toggleClass("d-block")
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>250){
          $(".return-to-back").fadeIn();
        }
        else{
          $(".return-to-back").fadeOut();
        }
      });
      $(".return-to-back").click(function(){
        $("html,body").animate({
          scrollTop:0
        },1000)
      });
})

window.onload = function(){
  let PreLoader = document.getElementById("preloader");
  PreLoader.style.display = "none";
};