document.addEventListener("DOMContentLoaded", function () {
  let delay = 200;
  let duration = 200;

  let animatedDivs = document.querySelectorAll(".prices");
  animatedDivs.forEach(function (div, index) {
    setTimeout(function () {
      div.style.opacity = "1";
      div.style.transform = "translateY(0)";
    }, delay * index);
  });
});
