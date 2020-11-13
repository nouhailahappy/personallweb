//nav checkbtn
function toggle(){
    var menu = document.getElementById("Menu")
    var menuoverlay = document.getElementById("menu-overlay")
    menu.classList.toggle('active')
    menuoverlay.classList.toggle('active')
}

function toggle(){
  var menu = document.getElementById("Menu")
  var menuoverlay = document.getElementById("menu-overlay")
  menu.classList.toggle('active')
  menuoverlay.classList.toggle('active')
}
function fonction(){
  var header = document.getElementById("header")
  var menuoverlay = document.getElementById("menu-overlay")
  var menu = document.getElementById("Menu")
  menuoverlay.classList.remove('active')
  menu.classList.remove('active')
  header.classList.add('active')
}
//change nav on scrolling 
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

//readmore pop-up
function popup(){
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}
function popup1(){
  var popup1 = document.getElementById('popup1');
  popup1.classList.toggle('active');
}

var modalBtn = document.querySelector('.boutton');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click',function(){
  modalBg.classList.add('bg-active');
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
})

// scroll reveal 
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 600,
  distance: "5rem",
  delay: 600
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 200,
  distance: "25rem",
  delay: 600
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600
});