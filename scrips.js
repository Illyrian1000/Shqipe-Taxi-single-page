document.addEventListener("DOMContentLoaded", function () {
  var delay = 200;
  var duration = 200;

  var animatedDivs = document.querySelectorAll(".prices");
  animatedDivs.forEach(function (div, index) {
    setTimeout(function () {
      div.style.opacity = "1";
      div.style.transform = "translateY(0)";
    }, delay * index);
  });
});
