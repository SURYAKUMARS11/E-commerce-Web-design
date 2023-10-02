var offerbtn = document.getElementById("offerbtn");

var offeexit = document
  .getElementById("offerexit")
  .addEventListener("click", function () {
    offerbtn.style.display = "none";
  });

var sidenav = document.getElementById("sidnav-titles");

var menubar = document
  .getElementById("menubar")
  .addEventListener("click", function () {
    sidenav.style.marginLeft = "0px";
  });

var clodebar = document
  .getElementById("closebar")
  .addEventListener("click", function () {
    sidenav.style.marginLeft = "-60%";
  });

var slider = document.querySelector(".slider-image-container");

var rightbutton = document.querySelector("#slider-right-activate");
var leftbutton = document.querySelector("#slider-left-activate");

slidermargin = 0;

rightbutton.addEventListener("click", function () {
  slidermargin = slidermargin + 100;
  if (slidermargin > 200) {
    slidermargin = 0;
    slider.style.marginLeft = 0;
  } else {
    slider.style.marginLeft = "-" + slidermargin + "vw";
  }
});

leftbutton.addEventListener("click", function () {
  if (slidermargin == 0) {
    slidermargin = 200;
    slider.style.marginLeft = "-" + slidermargin + "vw";
  } else {
    slidermargin = slidermargin - 100;
    slider.style.marginLeft = "-" + slidermargin + "vw";
  }
});

var likebuttons = document.querySelectorAll(".like-btn");

likebuttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.src.indexOf("blackheart") > 0) {
      console.log("jkjk");
      e.target.src = "icons/redheart.png";
    } else {
      e.target.src = "icons/blackheart.png";
    }
  });
});

window.addEventListener("scroll", function () {
  var elements = this.document.querySelectorAll(".initial-scroll-animate");
  elements.forEach((el) => {
    windowHeight = window.innerHeight;
    var elbound = el.getBoundingClientRect();

    console.log(windowHeight);
    console.log(elbound.top);
    if (windowHeight > elbound.top - 100) {
      console.log("Hi");
      el.classList.remove("reveal-scroll-animate");
    }
  });
});
