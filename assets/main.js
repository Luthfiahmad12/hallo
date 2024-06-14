document.getElementById("menu-btn").addEventListener("click", function () {
  var menu = document.getElementById("dropdown");
  menu.classList.toggle("hidden");
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
  speedAsDuration: true,
});
