var header = document.getElementById("header");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("header-active");
  current[0].className = current[0].className.replace(" header-active", "");
  this.className += " header-active";
  });
}

var player = document.getElementById("player");
var panel = $("#left_panel")[0];
var li = panel.getElementsByClassName("list-group-item");
var radio_icon = document.createElement("i");
radio_icon.className = 'fa-solid fa-radio';
radio_icon.style.marginLeft = "10px";
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
  var current = $("#left_panel > div > ul > li.header-active");
  current.removeClass("header-active");
  current.addClass('newClassWithYourStyles');
  $(this).children(":first").children(":first").after(radio_icon);
  var radio_link = $(this).attr("value");
  $("#player").attr("src", radio_link);
  player.play();
  this.className += " header-active";
  });
}
