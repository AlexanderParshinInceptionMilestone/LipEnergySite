var header = document.getElementById("header");
var nav_item = header.getElementsByClassName("nav-link");
for (var i = 0; i < nav_item.length; i++) {
  nav_item[i].addEventListener("click", function() {
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
  $(this).children(":first").children(":first").after(radio_icon);
  var radio_link = $(this).attr("value");
  $("#player").attr("src", radio_link);
  this.className += " header-active";
  if (!$("#play_button").hasClass('fa-pause')){
    play();
    $("#player_layout").css("animation","spin 10s linear infinite");
    }
  else {
    player.play();
    $("#player_layout").css("animation","spin 10s linear infinite");
    }
  });
}

$("#play_button").click(play);


function play() {
    if ($("#player").attr("src") === ""){
    var first_li = $("#left_panel > div > ul").children(":first");
    var first_link = first_li.attr("value");
    $("#player").attr("src", first_link);
    makeListItemActive(first_li);
    player.play();
    $("#player_layout").css("animation","spin 10s linear infinite");
    $("#play_button").removeClass("fa-play").addClass("fa-pause");
    }
    else if ($("#play_button").hasClass('fa-play')) {
       player.play();
       $("#player_layout").css("animation","spin 10s linear infinite");
       $("#play_button").removeClass("fa-play").addClass("fa-pause");
     }
     else {
        player.pause();
        $("#player_layout").css("animation","");
        $("#play_button").removeClass("fa-pause").addClass("fa-play");
     }
}

function makeListItemActive (listItem){
    listItem.addClass("header-active");
    listItem.children(":first").children(":first").after(radio_icon);
}

$("#forward_button").on( "click", function() {
    var active_station = $("#left_panel > div > ul > li.header-active");
    var next_station = active_station.next();
    var link = next_station.attr("value");
    if (typeof link !== "undefined"){
    $("#player").attr("src", link);
    player.play();
    active_station.removeClass("header-active");
    makeListItemActive(next_station);
    }
});

$("#backward_button").on( "click", function() {
    var active_station = $("#left_panel > div > ul > li.header-active");
    var prev_station = active_station.prev();
    var link = prev_station.attr("value");
    if (typeof link !== "undefined"){
    $("#player").attr("src", link);
    player.play();
    active_station.removeClass("header-active");
    makeListItemActive(prev_station);
    }
});


function setVolume(value) {
  var audio = document.getElementById("player");
  audio.volume = value / 100;
};