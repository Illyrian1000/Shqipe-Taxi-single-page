document.addEventListener("DOMContentLoaded", function () {
  var delay = 500; // Delay between showing each div in milliseconds
  var duration = 500; // Duration of the animation in milliseconds

  var animatedDivs = document.querySelectorAll(".prices");
  animatedDivs.forEach(function (div, index) {
    setTimeout(function () {
      div.style.opacity = "1";
      div.style.transform = "translateY(0)";
    }, delay * index);
  });
});
