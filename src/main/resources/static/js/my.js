var header = document.getElementById("header");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("header-active");
  current[0].className = current[0].className.replace(" header-active", "");
  this.className += " header-active";
  });
}

var x = document.getElementById("player");
function playAudio() {
  x.setAttribute("src", "https://mira.streamerr.co:8160/radio.mp3")
}