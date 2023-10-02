var offerbtn = document.getElementById("offerbtn");

var offerexit = document
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
