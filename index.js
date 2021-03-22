//enable tooltip
var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// add animation for each section
$("#projects-div").addClass("collapsing-show");
$("#about-div").addClass("collapsing-show");
$("#contact-div").addClass("zoom-in")

//accurately sets the height of background similar to the content

setInterval(() => {
  $(".night").css("height", `${$("#projects-div").height() + 300}`);
}, 1000);

// add background to navbar
$(window).on("scroll", function () {
  let scroll = this.scrollY;
  if (scroll > 150) {
    $(".nav-bar").fadeIn(1000, function () {
      $(".nav-bar").addClass("dark-nav-bar");
    });
  } else {
    $(".nav-bar").removeClass("dark-nav-bar");

  }
});





