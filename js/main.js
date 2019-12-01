"use strick"

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
        $(".side-icon").addClass("come")
    })
})