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