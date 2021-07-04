import $ from "./node_modules/@types/jquery/index";
import slick from "./slick/slick/slick";

$(document).ready(function () {
  $(".main-tab").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: false,
    swipeToSlide: false,
    swipe: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: ".slider-nav",
    lazyLoad: "ondemand",
  });

  $(".slider-nav").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    lazyLoad: "ondemand",
  });

  $("#popbtn").hover(function () {
    popup();}, function(){
      unpop();
    });
  function popup(){
    $("#myPopup")
      .addClass("show")
  };
  function unpop(){
    $("#myPopup")
      .removeClass("show")
  };

  $(".rating ul li").on("click", function () {
    let li = $(this),
      ul = li.parent(),
      rating = ul.parent(),
      last = ul.find(".current");

    if (!rating.hasClass("animate-left") && !rating.hasClass("animate-right")) {
      last.removeClass("current");

      ul.children("li").each(function () {
        let current = $(this);
        current.toggleClass("active", li.index() > current.index());
      });

      rating.addClass(
        li.index() > last.index() ? "animate-right" : "animate-left"
      );
      rating.css({
        "--x": li.position().left + "px",
      });
      li.addClass("move-to");
      last.addClass("move-from");

      setTimeout(() => {
        li.addClass("current");
        li.removeClass("move-to");
        last.removeClass("move-from");
        rating.removeClass("animate-left animate-right");
      }, 800);
    }
  });

  $(".rev1").on("click", function () {
    shrev1();
  });

  function shrev1() {
    $("#review-prompt").html(
      "That's too bad, but you still need to be logged in and to have purchased this product to be eligible to leave a public review on it."
    );
  }

  $(".rev2").on("click", function () {
    shrev2();
  });

  function shrev2() {
    $("#review-prompt").html(
      "Ok, but you still need to be logged in and to have purchased this product to be eligible to leave a public review on it."
    );
  }

  $(".rev3").on("click", function () {
    shrev3();
  });

  function shrev3() {
    $("#review-prompt").html(
      "You need to be logged in and to have purchased this product to be eligible to leave a public review on it."
    );
  }

  $(".rev4").on("click", function () {
    shrev4();
    exit();
  });

  function shrev4() {
    $("#review-prompt").html(
      "That's great, You need to be logged in and to have purchased this product to be eligible to leave a public review on it."
    );
    
  }

  $(".rev5").on("click", function () {
    shrev5();
  });

  function shrev5() {
    $("#review-prompt").html(
      "Amazing! We are glad you enjoyed it but you still need to be logged in and to have purchased this product to be eligible to leave a public review on it."
    );
  }




  // ---------------commenting-----------------------
  $("#rev-prd-cmt").on("click", function () {
    var comment = document.getElementById("comment");
    var main = comment.value;
    $("#cmt-delete").html(main);

    comment.value = "";
    $('input[name="commnt"]').attr("disabled", true);

    $("#cmt-delete")
      .addClass("cmt-delete-active")
      .on("animationend", function () {
        $("#cmt-delete").removeClass("cmt-delete-active");
      });
    $(".delete-bin")
      .addClass("delbin-active")
      .on("animationend", function () {
        $(".delete-bin").removeClass("delbin-active");
      });
    $(".lid")
      .addClass("lid-active")
      .on("animationend", function () {
        $(".lid").removeClass("lid-active");
      });

      comprompt();
  });

  function comprompt(){
    $("#comment-prompt").addClass("comprompt").on("animationend", function(){
      $("#comment-prompt").removeClass("comprompt");
    });
  };

  $('input[name="commnt"]').attr("disabled", true);

  $("#comment").on('input', function (e) {
    check();
  });

  function check() {
    let text = $('textarea[name="comment"]').val();
    if (text !== "") {
      $('input[name="commnt"]').attr("disabled", false);
    } else {
      $('input[name="commnt"]').attr("disabled", true);
    }
  }


  $(".start").addClass("drawn");

  
  $(".dashbtn").on("click", function(){
    $("#dash-coupon").attr(
      "placeholder",
      "Please enter a valid coupon code..."
    );
    $("#dash-coupon").val("");
  }); 
  

});

