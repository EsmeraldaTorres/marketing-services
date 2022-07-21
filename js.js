let animate = document.querySelectorAll(".animate");

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animate.length; i++) {
    let high = animate[i].offsetTop;
    if (high - 600 < scrollTop) {
      animate[i].style.opacity = 1;
      animate[i].classList.add("appear-up");
    }
  }
}

window.addEventListener("scroll", showScroll);
