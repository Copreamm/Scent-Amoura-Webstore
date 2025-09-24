window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".container-navbar");
  const jarakScroll = 20;

  if (window.scrollY > jarakScroll) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
