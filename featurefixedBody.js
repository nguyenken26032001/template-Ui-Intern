var Body = document.querySelector(".body_wrapper");
var title = document.querySelectorAll("#headertitle");
// document.querySelectorAll("#headertitle").style.width = "200px";
var bodyWidth = Body.offsetWidth;
if (bodyWidth < 900) {
  for (let i = 0; i < title.length; i++) {
    title[i].innerHTML = "Most calendars are designed for teams";
  }
}
var navbartoggle = document.querySelector(".navbar-toggler");
var menu_left = document.querySelector(".menu_left");
navbartoggle.addEventListener("click", function () {
  if (menu_left.classList.contains("aa")) {
    console.log("okoko");
  }
});
