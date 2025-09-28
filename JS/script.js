window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  const jarakScroll = 20;

  if (window.scrollY > jarakScroll) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
