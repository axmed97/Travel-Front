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
    const li = [...document.getElementsByClassName("acc-li")];
    li.forEach(function(selected){
      selected.addEventListener("click",function(e){
        e.preventDefault();
        const preActive = document.querySelector(".acc-li.actived-acc-li");
        preActive.classList.remove("actived-acc-li");
        selected.classList.add("actived-acc-li");

        let id = selected.getAttribute("id");
        let classId = "." + id
        $(".acc-slider.acc-slider-active").removeClass("acc-slider-active").addClass("d-none");
        $(classId).removeClass("d-none").addClass("acc-slider-active")
      })
    })
    $(".loc").click(function(){
      $(".acc-slider-drop").toggleClass("acc-slider-drop-active");
    })
    $(".cal").click(function(){
      $(".acc-slider-date").toggleClass("acc-slider-drop-active");
    })
    $("#datepicker").datepicker();
    $(".user").click(function(){
      $(".acc-slider-user").toggleClass("acc-slider-drop-active")
    })

    var box_1 = document.getElementsByClassName("box-1")[0];
    var box_2 = document.getElementsByClassName("box-2")[0];
    var box_3 = document.getElementsByClassName("box-3")[0];
    var nextCalc = document.getElementById("next-calc");
    var prevCalc = document.getElementById("prev-calc");
    var leftCalc = document.getElementById("left-calc");
    var rightCalc = document.getElementById("right-calc");
    var downCalc = document.getElementById("down-calc");
    var upCalc = document.getElementById("up-calc");

    nextCalc.addEventListener("click",function(){
      box_1.innerHTML++
    })
    prevCalc.addEventListener("click",function(){
      box_1.innerHTML--
    })

    rightCalc.addEventListener("click",function(){
      box_2.innerHTML++ 
    })
    leftCalc.addEventListener("click",function(){
      box_2.innerHTML--
    })
    
    upCalc.addEventListener("click",function(){
      box_3.innerHTML++
    })
    downCalc.addEventListener("click",function(){
      box_3.innerHTML--
    })
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