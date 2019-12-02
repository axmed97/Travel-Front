"use stric"

$(document).ready(function(){
    $(".basket").click (function(){
        $(".inbasket").toggleClass("show-basket");
    })
    $(".eur").click (function(){
        $(".drop-ul").toggleClass("show-money");
    })
    $(".acc-menu").hide();
    $(".slide-btn").click(function(){
        $(this).next().slideToggle();
    })
    $(".side-icon").click(function(){
        $(".side-menu").addClass("active-side-menu")
    })
    $(".back-li").click(function(){
        $(".side-menu").removeClass("active-side-menu")
    })
})