document.getElementById("toggleButton").addEventListener("click", function () {
  document.getElementById("sideWrapper").classList.toggle("side-wrapper-w");
  document.getElementById("contentWrapper").classList.toggle("main-wrapper-w");
  document.getElementById("brand").classList.toggle("brand-change");
});

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".btn-menu").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


