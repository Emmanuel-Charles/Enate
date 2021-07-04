import "./more.js";

window.addEventListener("scroll", function () {
  let catergoryMEn = document.getElementById("Men");

  if (window.pageYOffset > 251) {
    catergoryMEn.classList.add("shift-men");
  } else {
    catergoryMEn.classList.remove("shift-men");
  }

  if (window.pageYOffset > 1151) {
    document.getElementById("Men").style.position = "static";
  } else {
    document.getElementById("Men").style.position = "sticky";
  }
});

window.addEventListener("scroll", function () {
  let catergoryWomen = document.getElementById("Women");

  if (window.pageYOffset > 1354) {
    catergoryWomen.classList.add("shift-women");
  } else {
    catergoryWomen.classList.remove("shift-women");
  }

  if (window.pageYOffset > 2246) {
    document.getElementById("Women").style.position = "static";
  } else {
    document.getElementById("Women").style.position = "sticky";
  }
});

window.addEventListener("scroll", function () {
  let catergoryChildren = document.getElementById("Children");

  if (window.pageYOffset > 2454) {
    catergoryChildren.classList.add("shift-children");
  } else {
    catergoryChildren.classList.remove("shift-children");
  }

  if (window.pageYOffset > 3354) {
    document.getElementById("Children").style.position = "static";
  } else {
    document.getElementById("Children").style.position = "sticky";
  }
});

window.addEventListener("scroll", function () {
  let catergorySlides = document.getElementById("Slides");

  if (window.pageYOffset > 3554) {
    catergorySlides.classList.add("shift-slides");
  } else {
    catergorySlides.classList.remove("shift-slides");
  }

  if (window.pageYOffset > 4486) {
    document.getElementById("Slides").style.position = "static";
  } else {
    document.getElementById("Slides").style.position = "sticky";
  }
});

window.addEventListener("scroll", function () {
  let catergorySneakers = document.getElementById("Sneakers");

  if (window.pageYOffset > 4654) {
    catergorySneakers.classList.add("shift-sneakers");
  } else {
    catergorySneakers.classList.remove("shift-sneakers");
  }

  if (window.pageYOffset > 5586) {
    document.getElementById("Sneakers").style.position = "static";
  } else {
    document.getElementById("Sneakers").style.position = "sticky";
  }
});

window.addEventListener("scroll", function () {
  let catergoryFormal = document.getElementById("Formal");

  if (window.pageYOffset > 5756) {
    catergoryFormal.classList.add("shift-formal");
  } else {
    catergoryFormal.classList.remove("shift-formal");
  }

  if (window.pageYOffset > 6686) {
    document.getElementById("Formal").style.position = "static";
  } else {
    document.getElementById("Formal").style.position = "sticky";
  }
});

window.addEventListener("scroll", function () {
  let leftNav = document.getElementById("shop-center-aside");

  if (window.pageYOffset > 6290) {
    leftNav.classList.add("stick");
  } else {
    leftNav.classList.remove("stick");
  }
});

setTimeout(function () {
  document.getElementById("preload").classList.remove("preload");
}, 2000);

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  var css = document.createElement("style");
  css.innerHTML =
    ".typewrite > .wrap { border-right: 2px solid #017e83; animation: flash 1s linear infinite} @keyframes flash{50% {border-right:rgba(1, 126, 131, 0);}}";
  css.setAttribute("type", "text/css");
  document.body.appendChild(css);
};

var timeleft = 10;
var redirecttimer = setInterval(function () {
  if (timeleft == 0) {
    clearInterval(redirecttimer);
  }
  document.getElementById("redirectbar").value = 10 - timeleft;
  timeleft -= 1;
  document.getElementById("count").innerHTML = timeleft + 1;
}, 1000);





