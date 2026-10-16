// Belém photo slideshow on the home page (re-initialised on instant navigation)
document$.subscribe(function () {
  document.querySelectorAll(".belem-slideshow").forEach(function (show) {
    var slides = show.querySelectorAll("figure");
    var current = 0;
    var timer;

    function go(n) {
      slides[current].classList.remove("active");
      current = (n + slides.length) % slides.length;
      slides[current].classList.add("active");
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { go(current + 1); }, 5000);
    }

    show.querySelector(".belem-prev").addEventListener("click", function () { go(current - 1); restart(); });
    show.querySelector(".belem-next").addEventListener("click", function () { go(current + 1); restart(); });
    restart();
  });
});
