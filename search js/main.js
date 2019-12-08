"use strict"




$(document).ready(function(){
    
    let myRange = document.getElementById("myRange");
    let output = document.getElementById("value");
    output.innerHTML = myRange.value;
    myRange.oninput = function(){
    output.innerHTML = this.value;
    }
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
    $(".search-li").click(function(){
        $(".drop-search").toggleClass("d-block");
    })
    $(".active-a").click(function(){
        $(this).addClass("actived-click")
    })
    $(".filter-input").show();
    $(".filter-head").click(function(){
        $(this).next().slideToggle();
    })
    $(".detail-button").click(function(){
        $(".detail-button-drop").toggleClass("actived-detail-button");
    })
})