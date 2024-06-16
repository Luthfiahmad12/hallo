document.getElementById("menu-btn").addEventListener("click", function () {
  var menu = document.getElementById("dropdown");
  menu.classList.toggle("hidden");
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
  speedAsDuration: true,
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Tampilkan tombol saat scroll mencapai footer
  window.addEventListener("scroll", function () {
    if (
      window.scrollY >=
      document.getElementById("footer").offsetTop - window.innerHeight
    ) {
      scrollToTopBtn.classList.remove("hidden");
      scrollToTopBtn.classList.add("block");
    } else {
      scrollToTopBtn.classList.remove("block");
      scrollToTopBtn.classList.add("hidden");
    }
  });

  // Animasi scroll ke atas saat tombol diklik
  scrollToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop(800); // 800 milliseconds untuk animasi scroll
  });

  // Fungsi untuk animasi scroll ke atas
  function scrollToTop(duration) {
    var start = window.scrollY,
      startTime = performance.now(),
      distance = start,
      animationFrame;

    function scrollStep(timestamp) {
      var progress = timestamp - startTime;
      window.scrollTo(0, easeInOutQuad(progress, start, -start, duration));
      if (progress < duration) {
        animationFrame = requestAnimationFrame(scrollStep);
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    animationFrame = requestAnimationFrame(scrollStep);
  }

  // fungsi sticky header
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-blue-500");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("text-blue-500");
      }
    });
  });
});
